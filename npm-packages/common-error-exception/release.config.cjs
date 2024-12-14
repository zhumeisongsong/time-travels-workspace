const { createReleaseConfig } = require('@zhumeisong/semantic-release-config');

const name = 'common-error-exception';
const srcRoot = `dist/npm-packages/${name}`;

module.exports = createReleaseConfig({
  name,
  srcRoot,
});
