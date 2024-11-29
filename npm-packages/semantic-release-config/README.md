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

`pnpm install @zhumeisong/semantic-release-config`

3. Create a `release.config.cjs` file in your project root and add:

```
const {
  createReleaseConfig,
} = require('@zhumeisong/semantic-release-config');

// srcRoot: string
// - Default: './'
// - The root directory containing your package.json
// - Examples:
//   - './' - Current directory
//   - './npm-packages/git-cz-config' - Nested package directory

const srcRoot = './';

// name: string
// - Default: ''
// - The name of your package
// - Used in tag format and release message
// - Examples:
//   - '' - No prefix
//   - 'git-cz-config' - Will create tags like 'git-cz-config-v1.0.0'

const name = '';

// branches: { name: string }[]
// - Default: [{ name: 'main' }]
// - The branches you want to release
// - Used in tag format and release message
// - Examples:
//   - [{ name: 'main' }] - Only release from `main` branch
//   - [{ name: 'main' }, { name: 'dev' }] - Release from `main` and `dev` branches

const branches = [
  {
    name: 'main',
  },
];

module.exports = createReleaseConfig({
  name,
  srcRoot,
  branches,
});
```
