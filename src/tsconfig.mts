/**
 * @file Tsconfig
 * @module tsconfig-types/Tsconfig
 */

import type {
  BuildOptions,
  CompilerOptions,
  JsonObject,
  JsonValue,
  ProjectReference,
  TypeAcquisition,
  WatchOptions
} from '@flex-development/tsconfig-types'

/**
 * TypeScript configuration options.
 *
 * > As it concerns optional fields, `null` is used instead of `undefined`, even
 * > in fields where `null` may not be allowed by TypeScript.\
 * > This is to better support optional fields, as well as packages that may use
 * > this definition. Such packages are expected to handle `null` values.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode JsonValue}.
 *
 * @see https://www.typescriptlang.org/tsconfig
 * @see {@linkcode JsonObject}
 *
 * @extends {JsonObject}
 */
interface Tsconfig extends JsonObject {
  /**
   * Build options.
   *
   * @see {@linkcode BuildOptions}
   */
  buildOptions?: BuildOptions | null

  /**
   * Compile program on save.
   */
  compileOnSave?: boolean | null

  /**
   * Compiler options.
   *
   * @see {@linkcode CompilerOptions}
   */
  compilerOptions?: CompilerOptions | null

  /**
   * List of files to exclude in the program or glob patterns representing files
   * to exclude.
   */
  exclude?: string[] | null

  /**
   * Configuration file(s) to inherit from.
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#supporting-multiple-configuration-files-in-extends
   */
  extends?: string[] | string | false | null

  /**
   * Files to include in the program.
   */
  files?: string[] | false | null

  /**
   * List of files to include in the program or glob patterns representing files
   * to include.
   */
  include?: string[] | null

  /**
   * List of project references.
   *
   * @see {@linkcode ProjectReference}
   */
  references?: ProjectReference[] | false | null

  /**
   * Auto type-acquisition options.
   *
   * @see {@linkcode TypeAcquisition}
   */
  typeAcquisition?: TypeAcquisition | null

  /**
   * File and directory watching options.
   *
   * @see {@linkcode WatchOptions}
   */
  watchOptions?: WatchOptions | null
}

export type { Tsconfig as default }
