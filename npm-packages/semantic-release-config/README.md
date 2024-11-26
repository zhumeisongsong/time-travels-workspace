# @zhumeisong/semantic-release-config

Semantic release config for publishing NPM packages to GitHub and NPM registry. This config includes:

- Commit analyzer
- Release notes generator
- Changelog generation
- NPM publishing
- GitHub release
- Git asset updates

## Install

1. Install related packages:

`pnpm install semantic-release semantic-release-npm-github-publish @semantic-release/changelog @semantic-release/git -D`

If you are using semantic-release-plus, you can install the following packages:

`pnpm install semantic-release-plus -D`

2. Install @zhumeisong/semantic-release-config:

`pnpm install @zhumeisong/semantic-release-config -D`

3. Create a `release.config.cjs` file in your project root and add:

```
const {
  createReleaseConfig,
} = require('@zhumeisong/semantic-release-config');

const srcRoot = './'; // Default is current directory, you can set it to your package path, e.g. `./npm-packages/git-cz-config`
const name = ''; // Default is empty string, you can set it to your package name
const branch = 'main'; // Default is `main`, you can change it to `master` or other branch names

module.exports = createReleaseConfig({
  name,
  srcRoot,
  branch,
});
```
