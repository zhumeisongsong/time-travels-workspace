const { createReleaseConfig } = require('@zhumeisong/semantic-release-config');

const name = 'common-error-exception';
const srcRoot = `npm-packages/${name}`;

module.exports = createReleaseConfig({
  name,
  srcRoot,
});
