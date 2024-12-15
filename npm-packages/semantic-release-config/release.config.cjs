const { createMonorepoReleaseConfig } = require('./index.cjs');

const name = 'semantic-release-config';
const srcRoot = `npm-packages/${name}`;
const pkgRoot = `npm-packages/${name}`;

module.exports = createMonorepoReleaseConfig({
  name,
  srcRoot,
  pkgRoot,
});
