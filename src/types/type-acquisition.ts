/**
 * @file Type Definitions - TypeAcquisition
 * @module tsconfig-types/types/TypeAcquisition
 */

/**
 * Auto type-acquisition options.
 *
 * @see https://www.typescriptlang.org/tsconfig#typeAcquisition
 */
type TypeAcquisition = {
  /**
   * Prevent TypeScript from inferring types based on filenames.
   */
  disableFilenameBasedTypeAcquisition?: boolean

  /**
   * Enable or disable auto type-acquisition.
   */
  enable?: boolean

  /**
   * Enable or disable auto type-acquisition.
   *
   * @deprecated Use {@linkcode enable} instead.
   */
  enableAutoDiscovery?: boolean

  /**
   * Specifies type declarations to be excluded from auto type-acquisition.
   */
  exclude?: string[]

  /**
   * Specifies type declarations to be included in auto type-acquisition.
   */
  include?: string[]
}

export type { TypeAcquisition as default }
