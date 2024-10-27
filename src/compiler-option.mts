/**
 * @file CompilerOption
 * @module tsconfig-types/CompilerOption
 */

import type { CompilerOptions } from '@flex-development/tsconfig-types'

/**
 * Union of TypeScript compiler option names.
 *
 * @see https://www.typescriptlang.org/tsconfig#compilerOptions
 *
 * @see {@linkcode CompilerOptions}
 */
type CompilerOption = keyof CompilerOptions

export type { CompilerOption as default }
