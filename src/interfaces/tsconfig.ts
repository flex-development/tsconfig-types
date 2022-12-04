/**
 * @file Interfaces - TSConfig
 * @module tsconfig-types/interfaces/TSConfig
 */

import type {
  BuildOptions,
  CompilerOptions,
  CompilerOptionsValue,
  ProjectReference,
  TsNodeOptions,
  TypeAcquisition,
  WatchOptions
} from '#src/types'
import type { JsonValue } from '@flex-development/tutils'

/**
 * TypeScript configuration options.
 *
 * @see https://www.typescriptlang.org/tsconfig
 */
interface TSConfig {
  [option: string]:
    | CompilerOptionsValue
    | JsonValue
    | ProjectReference[]
    | TsNodeOptions
    | TypeAcquisition
    | WatchOptions

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
   * Path to configuration file to inherit from.
   */
  extends?: string

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
