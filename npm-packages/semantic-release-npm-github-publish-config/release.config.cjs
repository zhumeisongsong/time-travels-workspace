const { createReleaseConfig } = require('./index.cjs');

const name = 'semantic-release-npm-github-publish-config';
const srcRoot = `npm-packages/${name}`;

module.exports = createReleaseConfig(name, srcRoot);
