/**
 * @file Type Definitions - CompilerOptionsValue
 * @module tsconfig-types/types/CompilerOptionsValue
 */

import type { Plugin, ProjectReference } from '#src/interfaces'
import type { JSONPrimitive, MapLike } from '@flex-development/tutils'

/**
 * [`compilerOptions`][1] values.
 *
 * [1]: https://www.typescriptlang.org/tsconfig#compilerOptions
 */
type CompilerOptionsValue =
  | (number | string)[]
  | JSONPrimitive
  | MapLike<string[]>
  | Plugin[]
  | ProjectReference[]
  | string[]
  | undefined

export type { CompilerOptionsValue as default }
