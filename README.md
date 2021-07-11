# Template NPM Package

[![npm](https://img.shields.io/npm/v/@solariera/template-npm-package)](https://www.npmjs.com/package/@solariera/template-npm-package)
[![npm](https://img.shields.io/npm/dw/@solariera/template-npm-package)](https://www.npmjs.com/package/@solariera/template-npm-package)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/template-npm-package)](https://bundlephobia.com/result?p=@solariera/template-npm-package)

This is npm package template

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/template-npm-package
```

```console
# yarn
yarn add @solariera/template-npm-package
```

### 1-2. Basic Usage

```typescript
import { template } from '@solariera/template-npm-package';

const temp = template();
console.log(temp); // template
```

## 2. Specifications

### 2-1. Syntax & Parameters

#### template(`first` [, `second`])

| No. | Name     | Type   | Required | Description |
| --- | -------- | ------ | :------: | ----------- |
| 1   | `first`  | string |   Yes    | hogehoge    |
| 2   | `second` | object |          | fugafuga    |
