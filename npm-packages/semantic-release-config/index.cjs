module.exports.createReleaseConfig = ({
  srcRoot = './',
  name = '',
  branches = [
    {
      name: 'main',
    },
  ],
}) => {
  if (!srcRoot || typeof srcRoot !== 'string') {
    throw new Error('srcRoot parameter is required and must be a string');
  }

  if (typeof name !== 'string') {
    throw new Error('name parameter must be a string');
  }

  if (
    !Array.isArray(branches) ||
    !branches.length ||
    !branches.every((b) => b.name && typeof b.name === 'string')
  ) {
    throw new Error(
      'branches parameter must be a non-empty array of objects with name property',
    );
  }

  return {
    extends: 'semantic-release-npm-github-publish',
    pkgRoot: srcRoot,
    tagFormat: name ? `${name}-v\${version}` : `v\${version}`,
    commitPaths: [`${srcRoot}/*`],
    branches: branches,
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/changelog',
        {
          changelogFile: `${srcRoot}/CHANGELOG.md`,
        },
      ],
      '@semantic-release/npm',
      '@semantic-release/github',
      [
        '@semantic-release/git',
        {
          assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
          message:
            `release(version): Release ${name ? `${name} ` : ''}` +
            '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ],
  };
};
