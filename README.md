# tsconfig-types

[![github release](https://img.shields.io/github/v/release/flex-development/tsconfig-types.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/tsconfig-types/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/tsconfig-types.svg)](https://npmjs.com/package/@flex-development/tsconfig-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/tsconfig-types.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

[TypeScript][] definitions for `tsconfig.json`

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package contains TypeScript definitions for `tsconfig.json` files and values used in `tsconfig.json` files.

## Install

In Node.js with [yarn][]:

```sh
yarn add @flex-development/tsconfig-types
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

## Use

```ts
import type {
  CompilerOptions,
  Module,
  ModuleDetection,
  ModuleResolution,
  Paths,
  Target,
  Tsconfig
} from '@flex-development/tsconfig-types'
```

## API

- [`BuildOptions`](./src/build-options.mts)
- [`CompilerOption`](./src/compiler-option.mts)
- [`CompilerOptionsValue`](./src/compiler-options-value.mts)
- [`CompilerOptions`](./src/compiler-options.mts)
- [`FallbackPollingMap`](./src/fallback-polling-map.mts)
- [`FallbackPolling`](./src/fallback-polling.mts)
- [`ImportsNotUsedAsValuesMap`](./src/imports-not-used-as-values-map.mts)
- [`ImportsNotUsedAsValues`](./src/imports-not-used-as-values.mts)
- [`JsonArray`](./src/json-array.mts)
- [`JsonObject`](./src/json-object.mts)
- [`JsonPrimitive`](./src/json-primitive.mts)
- [`JsonValue`](./src/json-value.mts)
- [`JsxEmitMap`](./src/jsx-emit-map.mts)
- [`JsxEmit`](./src/jsx-emit.mts)
- [`JsxFactoryMap`](./src/jsx-factory-map.mts)
- [`JsxFactory`](./src/jsx-factory.mts)
- [`JsxFragmentFactoryMap`](./src/jsx-fragment-factory-map.mts)
- [`JsxFragmentFactory`](./src/jsx-fragment-factory.mts)
- [`JsxImportSourceMap`](./src/jsx-import-source-map.mts)
- [`JsxImportSource`](./src/jsx-import-source.mts)
- [`LibFile`](./src/lib-file.mts)
- [`LibMap`](./src/lib-map.mts)
- [`Lib`](./src/lib.mts)
- [`MapLike`](./src/map-like.mts)
- [`ModuleDetectionMap`](./src/module-detection-map.mts)
- [`ModuleDetection`](./src/module-detection.mts)
- [`ModuleMap`](./src/module-map.mts)
- [`ModuleResolutionMap`](./src/module-resolution-map.mts)
- [`ModuleResolution`](./src/module-resolution.mts)
- [`Module`](./src/module.mts)
- [`NewLineMap`](./src/new-line-map.mts)
- [`NewLine`](./src/new-line.mts)
- [`Paths`](./src/paths.mts)
- [`Plugin`](./src/plugin.mts)
- [`PollingWatchMap`](./src/polling-watch-map.mts)
- [`PollingWatch`](./src/polling-watch.mts)
- [`ProjectReference`](./src/project-reference.mts)
- [`TargetMap`](./src/target-map.mts)
- [`Target`](./src/target.mts)
- [`Tsconfig`](./src/tsconfig.mts)
  - alias: `TsconfigJson`
- [`TypeAcquisition`](./src/type-acquisition.mts)
- [`WatchDirectoryMap`](./src/watch-directory-map.mts)
- [`WatchDirectory`](./src/watch-directory.mts)
- [`WatchFileMap`](./src/watch-file-map.mts)
- [`WatchFile`](./src/watch-file.mts)
- [`WatchOptions`](./src/watch-options.mts)

## Related

- [`pkg-types`][pkg-types] — TypeScript definitions for `package.json`
- [`tsconfig-utils`][tsconfig-utils] — Utilities for working with [`tsconfig`][tsconfig] files

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[pkg-types]: https://github.com/flex-development/pkg-types

[tsconfig-utils]: https://github.com/flex-development/tsconfig-utils

[tsconfig]: https://www.typescriptlang.org/tsconfig

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
