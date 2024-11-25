module.exports.createReleaseConfig = (name, srcRoot) => {
  if (!name || typeof name !== 'string') {
    throw new Error('name parameter is required and must be a string');
  }
  if (!srcRoot || typeof srcRoot !== 'string') {
    throw new Error('srcRoot parameter is required and must be a string');
  }

  return {
    extends: 'semantic-release-npm-github-publish',
    pkgRoot: srcRoot,
    tagFormat: `${name}-v\${version}`,
    commitPaths: [`${srcRoot}/*`],
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
            `release(version): Release ${name} ` +
            '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ],
  };
};