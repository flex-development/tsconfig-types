# tsconfig-types

[![npm](https://img.shields.io/npm/v/@flex-development/tsconfig-types.svg)](https://npmjs.com/package/@flex-development/tsconfig-types)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/tsconfig-types.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![github actions](http://img.shields.io/badge/-github%20actions-2088ff?style=flat&logo=github-actions&logoColor=ffffff)](https://github.com/features/actions)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[TypeScript][1] definitions for `tsconfig.json`

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Contribute](#contribute)

## What is this?

This package contains TypeScript definitions for `tsconfig.json` files and values used in `tsconfig.json` files.

## When should I use this?

Use this package when you need TypeScript definitions compatible with the [`tsconfig.json` reference][2]. Definitions
exported by the `typescript` module itself are not compatible with values passed by users.

## Install

This package is [ESM only][3].

```sh
yarn add @flex-development/tsconfig-types
```

From Git:

```sh
yarn add @flex-development/tsconfig-types@flex-development/tsconfig-types
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```typescript
/**
 * @file Utilities - compilerOptionsForProgram
 * @module utils/compilerOptionsForProgram
 */

import {
  ImportsNotUsedKind,
  JsxEmit,
  ModuleDetectionKind,
  ModuleKind,
  ModuleResolutionKind,
  NewLineKind,
  ScriptTarget,
  type CompilerOptions
} from '@flex-development/tsconfig-types'
import ts from 'typescript'

/**
 * Converts user compiler options to programmatic compiler options.
 *
 * @param {CompilerOptions} [compilerOptions={}] - User compiler options
 * @return {ts.CompilerOptions} Compiler options for TypeScript program
 */
const compilerOptionsForProgram = (
  compilerOptions: CompilerOptions = {}
): ts.CompilerOptions => {
  /**
   * Compiler options for TypeScript program.
   *
   * @const {ts.CompilerOptions} options
   */
  const options: ts.CompilerOptions = {}

  // user compiler options
  const {
    importsNotUsedAsValues,
    jsx,
    lib,
    module,
    moduleDetection,
    moduleResolution,
    newLine,
    target
  } = compilerOptions

  // typescript program expects declaration names to match node_modules exactly
  if (Array.isArray(lib)) {
    options.lib = lib.map((name: string) => `lib.${name}.d.ts`)
  }

  // importsNotUsedAsValues
  switch (importsNotUsedAsValues?.toLowerCase() as ImportsNotUsedKind) {
    case ImportsNotUsedKind.Error:
      options.importsNotUsedAsValues = ts.ImportsNotUsedAsValues.Error
      break
    case ImportsNotUsedKind.Preserve:
      options.importsNotUsedAsValues = ts.ImportsNotUsedAsValues.Preserve
      break
    case ImportsNotUsedKind.Remove:
      options.importsNotUsedAsValues = ts.ImportsNotUsedAsValues.Error
      break
  }

  // jsx
  switch (jsx?.toLowerCase() as JsxEmit) {
    case JsxEmit.Preserve:
      options.jsx = ts.JsxEmit.Preserve
      break
    case JsxEmit.React:
      options.jsx = ts.JsxEmit.React
      break
    case JsxEmit.ReactJSX:
      options.jsx = ts.JsxEmit.ReactJSX
      break
    case JsxEmit.ReactJSXDev:
      options.jsx = ts.JsxEmit.ReactJSXDev
      break
    case JsxEmit.ReactNative:
      options.jsx = ts.JsxEmit.ReactNative
      break
  }

  // module
  switch (module?.toLowerCase() as ModuleKind) {
    case ModuleKind.AMD:
      options.module = ts.ModuleKind.AMD
      break
    case ModuleKind.CommonJS:
      options.module = ts.ModuleKind.CommonJS
      break
    case ModuleKind.ES6:
    case ModuleKind.ES2015:
      options.module = ts.ModuleKind.ES2015
      break
    case ModuleKind.ES2020:
      options.module = ts.ModuleKind.ES2020
      break
    case ModuleKind.ES2022:
      options.module = ts.ModuleKind.ES2022
      break
    case ModuleKind.ESNext:
      options.module = ts.ModuleKind.ESNext
      break
    case ModuleKind.Node16:
      options.module = ts.ModuleKind.Node16
      break
    case ModuleKind.NodeNext:
      options.module = ts.ModuleKind.NodeNext
      break
    case ModuleKind.None:
      options.module = ts.ModuleKind.None
      break
    case ModuleKind.System:
      options.module = ts.ModuleKind.System
      break
    case ModuleKind.UMD:
      options.module = ts.ModuleKind.UMD
      break
  }

  // moduleDetection
  switch (moduleDetection?.toLowerCase() as ModuleDetectionKind) {
    case ModuleDetectionKind.Auto:
      options.moduleDetection = ts.ModuleDetectionKind.Auto
      break
    case ModuleDetectionKind.Force:
      options.moduleDetection = ts.ModuleDetectionKind.Force
      break
    case ModuleDetectionKind.Legacy:
      options.moduleDetection = ts.ModuleDetectionKind.Legacy
      break
  }

  // moduleResolution
  switch (moduleResolution?.toLowerCase() as ModuleResolutionKind) {
    case ModuleResolutionKind.Classic:
      options.moduleResolution = ts.ModuleResolutionKind.Classic
      break
    case ModuleResolutionKind.Node16:
      options.moduleResolution = ts.ModuleResolutionKind.Node16
      break
    case ModuleResolutionKind.NodeJs:
      options.moduleResolution = ts.ModuleResolutionKind.NodeJs
      break
    case ModuleResolutionKind.NodeNext:
      options.moduleResolution = ts.ModuleResolutionKind.NodeNext
      break
  }

  // newLine
  switch (newLine?.toLowerCase() as NewLineKind) {
    case NewLineKind.CarriageReturnLineFeed:
      options.newLine = ts.NewLineKind.CarriageReturnLineFeed
      break
    case NewLineKind.LineFeed:
      options.newLine = ts.NewLineKind.LineFeed
      break
  }

  // target
  switch (target?.toLowerCase() as ScriptTarget) {
    case ScriptTarget.ES3:
      options.target = ts.ScriptTarget.ES3
      break
    case ScriptTarget.ES5:
      options.target = ts.ScriptTarget.ES5
      break
    case ScriptTarget.ES6:
    case ScriptTarget.ES2015:
      options.target = ts.ScriptTarget.ES2015
      break
    case ScriptTarget.ES2016:
      options.target = ts.ScriptTarget.ES2016
      break
    case ScriptTarget.ES2017:
      options.target = ts.ScriptTarget.ES2017
      break
    case ScriptTarget.ES2018:
      options.target = ts.ScriptTarget.ES2018
      break
    case ScriptTarget.ES2019:
      options.target = ts.ScriptTarget.ES2019
      break
    case ScriptTarget.ES2020:
      options.target = ts.ScriptTarget.ES2020
      break
    case ScriptTarget.ES2021:
      options.target = ts.ScriptTarget.ES2021
      break
    case ScriptTarget.ES2022:
      options.target = ts.ScriptTarget.ES2022
      break
    case ScriptTarget.ESNext:
      options.target = ts.ScriptTarget.ESNext
      break
  }

  return { ...compilerOptions, ...options } as ts.CompilerOptions
}

export default compilerOptionsForProgram
```

## API

### Enums

- [`ImportsNotUsedKind`](src/enums/imports-not-used-kind.ts)
- [`JsxEmit`](src/enums/jsx-emit.ts)
- [`ModuleDetectionKind`](src/enums/module-detection-kind.ts)
- [`ModuleKind`](src/enums/module-kind.ts)
- [`ModuleResolutionKind`](src/enums/module-resolution-kind.ts)
- [`NewLineKind`](src/enums/new-line-kind.ts)
- [`PollingWatchKind`](src/enums/polling-watch-kind.ts)
- [`ScriptTarget`](src/enums/script-target.ts)
- [`WatchDirectoryKind`](src/enums/watch-directory-kind.ts)
- [`WatchFileKind`](src/enums/watch-file-kind.ts)

### Interfaces

- [`Plugin`](src/interfaces/plugin.ts)
- [`TSConfig`](src/interfaces/tsconfig.ts)

### Types

- [`BuildOptions`](src/types/build-options.ts)
- [`CompilerOptionsValue`](src/types/compiler-options-value.ts)
- [`CompilerOptions`](src/types/compiler-options.ts)
- [`FallbackPolling`](src/types/fallback-polling.ts)
- [`ImportsNotUsedAsValues`](src/types/imports-not-used-as-values.ts)
- [`Jsx`](src/types/jsx.ts)
- [`Lib`](src/types/lib.ts)
- [`ModuleDetection`](src/types/module-detection.ts)
- [`ModuleResolution`](src/types/module-resolution.ts)
- [`Module`](src/types/module.ts)
- [`NewLine`](src/types/new-line.ts)
- [`Paths`](src/types/paths.ts)
- [`PollingWatch`](src/types/polling-watch.ts)
- [`ProjectReference`](src/types/project-reference.ts)
- [`Target`](src/types/target.ts)
- [`TsNodeOptions`](src/types/ts-node-options.ts)
- [`TypeAcquisition`](src/types/type-acquisition.ts)
- [`WatchDirectory`](src/types/watch-directory.ts)
- [`WatchFile`](src/types/watch-file.ts)
- [`WatchOptions`](src/types/watch-options.ts)

## Related

- [`pkg-types`][4] &mdash; TypeScript definitions for `package.json`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://typescriptlang.org/
[2]: https://www.typescriptlang.org/tsconfig
[3]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[4]: https://github.com/flex-development/pkg-types
