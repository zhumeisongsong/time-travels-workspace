# @zhumeisong/semantic-release-config

Semantic release config for publishing NPM packages to GitHub and NPM registry. This config includes:

- Commit analyzer
- Release notes generator
- Changelog generation
- NPM publishing
- GitHub release
- Git asset updates

## Install For Monorepo

### 1. Install related packages:

`pnpm install semantic-release semantic-release-npm-github-publish @semantic-release/changelog @semantic-release/git semantic-release-plus -D`

### 2. Install @zhumeisong/semantic-release-config:

`pnpm install @zhumeisong/semantic-release-config`

### 3. Create a `release.config.cjs` file in your project root and add:

```
const {
  createMonorepoReleaseConfig,
} = require('@zhumeisong/semantic-release-config');

const name = 'your-package-name';
const srcRoot = './your-package-src-root';
const pkgRoot = 'dist/your-package-pkg-root';
const branches = [
  {
    name: 'main',
  },
];

module.exports = createMonorepoReleaseConfig({
  name,
  srcRoot,
  pkgRoot,
  branches,
});
```

## Configuration Options

### name

The name of your package. Used in tag format and release message.

type: `string`

default: ``

example: `@zhumeisong/semantic-release-config`

### srcRoot

The source directory of your package.

type: `string`

default: `./`

example: `npm-packages/semantic-release-config`

### pkgRoot

The build directory of your package.

type: `string`

default: `dist/`

example: `dist/npm-packages/semantic-release-config`

### branches

The branches you want to release from.

type: `{ name: string }[]`

default: `[{ name: 'main' }]`
