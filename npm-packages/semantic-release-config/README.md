# @zhumeisong/semantic-release-config

Semantic release config for publishing NPM packages to GitHub and NPM registry. This config includes:

- Commit analyzer
- Release notes generator
- Changelog generation
- NPM publishing
- GitHub release
- Git asset updates

## Install

### 1. Install related packages:

`pnpm install semantic-release semantic-release-npm-github-publish @semantic-release/changelog @semantic-release/git -D`

If you are using semantic-release-plus, you can install the following packages:

`pnpm install semantic-release-plus -D`

### 2. Install @zhumeisong/semantic-release-config:

`pnpm install @zhumeisong/semantic-release-config`

### 3. Create a `release.config.cjs` file in your project root and add:

```
const {
  createReleaseConfig,
} = require('@zhumeisong/semantic-release-config');

const name = '';
const srcRoot = './';
const pkgRoot = 'dist/';
const branches = [
  {
    name: 'main',
  },
];

module.exports = createReleaseConfig({
  name,
  srcRoot,
  pkgRoot,
  branches,
});
```

## Configuration Options

| Option | Type | Default | Description | Examples |
|--------|------|---------|-------------|-----------|
| srcRoot | string | './' | The root directory containing your package.json | - './' (Current directory)<br>- './npm-packages/git-cz-config' (Nested package)<br>- './dist/npm-packages/git-cz-config' (Build directory) |
| pkgRoot | string | 'dist/' | The root directory containing your package.json | - 'dist/' (Build directory)<br>- 'dist/npm-packages/git-cz-config' (Nested package) |
| name | string | '' | The name of your package. Used in tag format and release message | - '' (No prefix)<br>- 'git-cz-config' (Creates tags like 'git-cz-config-v1.0.0') |
| branches | { name: string }[] | [{ name: 'main' }] | The branches you want to release from | - [{ name: 'main' }] (Only main branch)<br>- [{ name: 'main' }, { name: 'dev' }] (Multiple branches) |
