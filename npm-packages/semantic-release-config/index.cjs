const { createMonorepoReleaseConfig } = require('./src/monorepo-release-config.cjs');
const { createMonolithicReleaseConfig } = require('./src/monolithic-release-config.cjs');

module.exports = {
  createMonorepoReleaseConfig,
  createMonolithicReleaseConfig,
};