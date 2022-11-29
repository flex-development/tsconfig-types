/**
 * @file Enums - ModuleKind
 * @module tsconfig-types/enums/ModuleKind
 */

import type { Module } from '#src/types'

/**
 * Module systems.
 *
 * @see https://www.typescriptlang.org/tsconfig#module
 *
 * @enum {Lowercase<Module>}
 */
enum ModuleKind {
  AMD = 'amd',
  CommonJS = 'commonjs',
  ES6 = 'es6',
  ES2015 = 'es2015',
  ES2020 = 'es2020',
  ES2022 = 'es2022',
  ESNext = 'esnext',
  Node16 = 'node16',
  NodeNext = 'nodenext',
  None = 'none',
  System = 'system',
  UMD = 'umd'
}

export default ModuleKind
