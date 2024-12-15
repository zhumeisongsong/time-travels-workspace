module.exports.createMonolithicReleaseConfig = ({
  srcRoot = './',
  pkgRoot = 'dist/',
  branches = [
    {
      name: 'main',
    },
  ],
}) => {
  if (!srcRoot || typeof srcRoot !== 'string') {
    throw new Error('srcRoot parameter is required and must be a string');
  }

  if (!pkgRoot || typeof pkgRoot !== 'string') {
    throw new Error('pkgRoot parameter is required and must be a string');
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
    pkgRoot: pkgRoot,
    tagFormat: `v\${version}`,
    commitPaths: [`${srcRoot}/*`],
    branches: branches,
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/github',
      '@semantic-release/git',
    ],
  };
};
