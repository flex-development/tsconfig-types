/**
 * @file Type Definitions - CompilerOption
 * @module tsconfig-types/types/CompilerOption
 */

import type { CompilerOptions } from '#src/interfaces'

/**
 * [Compiler option][1] names.
 *
 * [1]: https://www.typescriptlang.org/tsconfig#compilerOptions
 */
type CompilerOption = keyof CompilerOptions

export type { CompilerOption as default }
