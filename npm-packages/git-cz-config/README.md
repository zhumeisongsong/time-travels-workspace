# @zhumeisong/git-cz-config

Semantic Git commits config with emoji. ✨🐛💄💚

## Install

### 1. Install git-cz by :

 `pnpm install git-cz -D`

### 2. Config it in package.json:

```
 "config": {
    "commitizen": {
      "path": "git-cz"
    }
  }
```

### 3. Add script in package.json:

```
"scripts": {
    "commit": "git-cz"
  }
```

### 4. Install @zhumeisong/git-cz-config: 

`pnpm install @zhumeisong/git-cz-config -D`

### 5. Create a `changelog.config.cjs` file and add:

```
const gitCzConfig = require('@zhumeisong/git-cz-config');

module.exports = {
  ...gitCzConfig,
};
```

### 6. Run `pnpm run commit` to submit the change.
