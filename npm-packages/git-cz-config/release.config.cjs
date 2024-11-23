const {
  createReleaseConfig,
} = require('@zhumeisong/semantic-release-npm-github-publish-config');

const name = 'git-cz-config';
const srcRoot = `npm-packages/${name}`;

module.exports = createReleaseConfig(name, srcRoot);
