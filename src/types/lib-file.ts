/**
 * @file Type Definitions - LibFile
 * @module tsconfig-types/types/LibFile
 */

import type Lib from './lib'

/**
 * Name of a [library definition file][1] in the `node_modules/typescript/lib`
 * directory.
 *
 * TypeScript expects values in [`compilerOptions.lib`][1] to match this schema
 * when using the [Compiler API][2].
 *
 * [1]: https://www.typescriptlang.org/tsconfig#lib
 * [2]: https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
 *
 * @see {@linkcode Lib}
 */
type LibFile = Lowercase<`lib.${Lib}.d.ts`>

export type { LibFile as default }
