/**
 * @file Interfaces - TSConfig
 * @module tsconfig-types/interfaces/TSConfig
 */

import type { JsonObject, OneOrMany } from '@flex-development/tutils'
import type BuildOptions from './build-options'
import type CompilerOptions from './compiler-options'
import type ProjectReference from './project-reference'
import type TsNodeOptions from './ts-node-options'
import type TypeAcquisition from './type-acquisition'
import type WatchOptions from './watch-options'

/**
 * TypeScript configuration options.
 *
 * @see https://www.typescriptlang.org/tsconfig
 *
 * @extends {JsonObject}
 */
interface TSConfig extends JsonObject {
  /**
   * Build options.
   *
   * @see [`BuildOptions`]({@link ./build-options.ts})
   */
  buildOptions?: BuildOptions

  /**
   * Compile program on save.
   */
  compileOnSave?: boolean

  /**
   * Compiler options.
   *
   * @see [`CompilerOptions`]({@link ./compiler-options.ts})
   */
  compilerOptions?: CompilerOptions

  /**
   * List of files to exclude in the program or glob patterns representing files
   * to exclude.
   */
  exclude?: string[]

  /**
   * Configuration file(s) to inherit from.
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#supporting-multiple-configuration-files-in-extends
   */
  extends?: OneOrMany<string>

  /**
   * Files to include in the program.
   */
  files?: string[]

  /**
   * List of files to include in the program or glob patterns representing files
   * to include.
   */
  include?: string[]

  /**
   * Project references.
   *
   * @see [`ProjectReference`]({@link ./project-reference.ts})
   */
  references?: ProjectReference[]

  /**
   * [`ts-node`][1] options.
   *
   * [1]: https://github.com/TypeStrong/ts-node
   *
   * @see [`TsNodeOptions`]({@link ./ts-node-options.ts})
   */
  'ts-node'?: TsNodeOptions

  /**
   * Auto type-acquisition options.
   *
   * @see [`TypeAcquisition`]({@link ./type-acquisition.ts})
   */
  typeAcquisition?: TypeAcquisition

  /**
   * File and directory watching options.
   *
   * @see [`WatchOptions`]({@link ./watch-options.ts})
   */
  watchOptions?: WatchOptions
}

export type { TSConfig as default }
