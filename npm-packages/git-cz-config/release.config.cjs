const { createMonorepoReleaseConfig } = require('@zhumeisong/semantic-release-config');

const name = 'git-cz-config';
const srcRoot = `npm-packages/${name}`;
const pkgRoot = `npm-packages/${name}`;

module.exports = createMonorepoReleaseConfig({ name, srcRoot, pkgRoot });