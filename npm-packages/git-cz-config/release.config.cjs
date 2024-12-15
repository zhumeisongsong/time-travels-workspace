const { createMonorepoReleaseConfig } = require('@zhumeisong/semantic-release-config');

const name = 'git-cz-config';
const srcRoot = `npm-packages/${name}`;

module.exports = createMonorepoReleaseConfig({ name, srcRoot });