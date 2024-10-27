/**
 * @file CompilerOptionsValue
 * @module tsconfig-types/CompilerOptionsValue
 */

import type {
  JsonPrimitive,
  MapLike,
  Plugin,
  ProjectReference
} from '@flex-development/tsconfig-types'

/**
 * Union of TypeScript compiler option values.
 *
 * @see https://www.typescriptlang.org/tsconfig#compilerOptions
 * @see {@linkcode JsonPrimitive}
 * @see {@linkcode MapLike}
 * @see {@linkcode Plugin}
 * @see {@linkcode ProjectReference}
 */
type CompilerOptionsValue =
  | (number | string)[]
  | JsonPrimitive
  | MapLike<string[]>
  | Plugin[]
  | ProjectReference[]
  | string[]

export type { CompilerOptionsValue as default }
