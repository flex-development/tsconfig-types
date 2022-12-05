/**
 * @file Type Definitions - CompilerOptionsValue
 * @module tsconfig-types/types/CompilerOptionsValue
 */

import type { Plugin } from '#src/interfaces'
import type { JsonPrimitive, MapLike } from '@flex-development/tutils'
import type ProjectReference from './project-reference'

/**
 * [`compilerOptions`][1] values.
 *
 * [1]: https://www.typescriptlang.org/tsconfig#compilerOptions
 */
type CompilerOptionsValue =
  | (number | string)[]
  | JsonPrimitive
  | MapLike<string[]>
  | Plugin[]
  | ProjectReference[]
  | string[]

export type { CompilerOptionsValue as default }
