/**
 * @file BuildOptions
 * @module tsconfig-types/BuildOptions
 */

import type { CompilerOptionsValue } from '@flex-development/tsconfig-types'

/**
 * Program build options.
 *
 * > As it concerns optional fields, `null` is used instead of `undefined`, even
 * > in fields where `null` may not be allowed by TypeScript.\
 * > This is to better support optional fields, as well as packages that may use
 * > this definition. Such packages are expected to handle `null` values.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode CompilerOptionsValue}.
 */
interface BuildOptions {
  [option: string]: CompilerOptionsValue

  /**
   * Only recheck/rebuild files that have changed as well as files that directly
   * import them.
   *
   * @see https://www.typescriptlang.org/tsconfig/#assumeChangesOnlyAffectDirectDependencies
   *
   * @default false
   */
  assumeChangesOnlyAffectDirectDependencies?: boolean | null

  /**
   * Show what would be built.
   *
   * @default false
   */
  dry?: boolean | null

  /**
   * Build all projects, including those that appear to be up to date.
   *
   * @default false
   */
  force?: boolean | null

  /**
   * Save `.tsbuildinfo` files to allow for incremental compilation of projects.
   *
   * @default false
   */
  incremental?: boolean | null

  /**
   * Log paths used during the module resolution process.
   *
   * @default false
   */
  traceResolution?: boolean | null

  /**
   * Enable/disable verbose logging.
   *
   * @default false
   */
  verbose?: boolean | null
}

export type { BuildOptions as default }
