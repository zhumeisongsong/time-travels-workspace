const { createReleaseConfig } = require('./index');

const name = 'semantic-release-npm-github-publish-config';
const srcRoot = `npm-packages/${name}`;

module.exports = createReleaseConfig(name, srcRoot);
