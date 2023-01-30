/**
 * @file Type Definitions - CompilerOptionsValue
 * @module tsconfig-types/types/CompilerOptionsValue
 */

import type { Plugin, ProjectReference } from '#src/interfaces'
import type { JsonPrimitive } from '@flex-development/tutils'
import type Paths from './paths'

/**
 * [`compilerOptions`][1] values.
 *
 * [1]: https://www.typescriptlang.org/tsconfig#compilerOptions
 */
type CompilerOptionsValue =
  | (number | string)[]
  | JsonPrimitive
  | Paths
  | Plugin[]
  | ProjectReference[]
  | string[]

export type { CompilerOptionsValue as default }
