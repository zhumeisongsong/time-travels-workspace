const { createReleaseConfig } = require('./index.cjs');

const name = 'common-error-exception';
const srcRoot = `npm-packages/${name}`;

module.exports = createReleaseConfig({
  name,
  srcRoot,
});
