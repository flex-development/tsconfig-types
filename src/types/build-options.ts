/**
 * @file Type Definitions - BuildOptions
 * @module tsconfig-types/types/BuildOptions
 */

/**
 * Program build options.
 */
type BuildOptions = {
  /**
   * Have recompiles in projects that use {@linkcode incremental} assume that
   * changes within a file will only affect files directly depending on it.
   *
   * @default false
   */
  assumeChangesOnlyAffectDirectDependencies?: boolean

  /**
   * Show what would be built.
   *
   * @default false
   */
  dry?: boolean

  /**
   * Build all projects, including those that appear to be up to date.
   *
   * @default false
   */
  force?: boolean

  /**
   * Save `.tsbuildinfo` files to allow for incremental compilation of projects.
   *
   * @default false
   */
  incremental?: boolean

  /**
   * Log paths used during the module resolution process.
   *
   * @default false
   */
  traceResolution?: boolean

  /**
   * Enable verbose logging.
   *
   * @default false
   */
  verbose?: boolean
}

export type { BuildOptions as default }
