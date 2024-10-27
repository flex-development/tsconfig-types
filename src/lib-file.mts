/**
 * @file LibFile
 * @module tsconfig-types/LibFile
 */

import type { Lib } from '@flex-development/tsconfig-types'

/**
 * Name of a [library definition file][lib] in the `node_modules/typescript/lib`
 * directory.
 *
 * TypeScript expects values in [`compilerOptions.lib`][lib] to use this syntax
 * when using the [Compiler API][api].
 *
 * [api]: https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
 * [lib]: https://www.typescriptlang.org/tsconfig#lib
 *
 * @see {@linkcode Lib}
 */
type LibFile = Lowercase<`lib.${Lib}.d.ts`>

export type { LibFile as default }
