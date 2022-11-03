# CaixieJS's eslint config presets

- 使用 prettier 自动格式化 formatting
- 包含多个预设配置：JavaScript，TypeScript，Vue2、3，React，ReactNative，Svelte，Solid
- 为 Html，Json，Yaml，Markdown 提供 Lint
- 只需要一行配置就可以提供合理的最佳实践
- 默认包含别名映射 "@" => "src", "~" => "./"

## Package

### eslint-config-caixiejs-base

基础配置，检查 JavaScript，HTML, JSON, yaml, markdown。

### eslint-config-caixiejs-ts

继承自基础配置，检查 TypeScript

### eslint-config-caixiejs

与 caixiejs-ts 配置相同

### eslint-config-caixiejs-vue

继承自 caixiejs-ts，检查 Vue3

### eslint-config-caixiejs-vue2

继承自 caixiejs-ts，检查 Vue2

### eslint-config-caixiejs-react

继承自 caixiejs-ts，检查 React

### eslint-config-caixiejs-react-native

继承自 caixiejs-react，检查 React Native

### eslint-config-caixiejs-svelte

继承自 caixiejs-ts，检查 Svelte

### eslint-config-caixiejs-solid

继承自 caixiejs-ts，检查 Solid

## Usage

### Install

```bash
pnpm i -D eslint

pnpm i -D eslint-config-caixiejs # equals to caixiejs-ts
pnpm i -D eslint-config-caixiejs-base # base
pnpm i -D eslint-config-caixiejs-ts # for TypeScript
pnpm i -D eslint-config-caixiejs-vue # for Vue3
pnpm i -D eslint-config-caixiejs-vue2 # for Vue2
pnpm i -D eslint-config-caixiejs-react # for React
pnpm i -D eslint-config-caixiejs-react-native # for React Native
pnpm i -D eslint-config-caixiejs-svelte # for Svelte
pnpm i -D eslint-config-caixiejs-solid # for Solid
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "caixiejs" // or caixiejs-base, caixiejs-ts, caixiejs-vue, caixiejs-vue2, caixiejs-react, caixiejs-react-native, caixiejs-svelte, caixiejs-solid
}
```

你通常不需要 .eslintignore，因为预置里面已经提供了

### Change import alias

```json
{
  "settings": {
    "import/resolver": {
      "alias": { // default alias
        "map": [
          ["~", "."],
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", "mts", ".d.ts"]
      }
    }
  }
}
```

### Add scripts for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```
