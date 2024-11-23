const { createReleaseConfig } = require('./index.cjs');

const name = 'semantic-release-config';
const srcRoot = `npm-packages/${name}`;

module.exports = createReleaseConfig(name, srcRoot);
