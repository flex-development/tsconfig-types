/**
 * @file TypeAcquisition
 * @module tsconfig-types/TypeAcquisition
 */

import type { CompilerOptionsValue } from '@flex-development/tsconfig-types'

/**
 * Auto type-acquisition options.
 *
 * > As it concerns optional fields, `null` is used instead of `undefined`, even
 * > in fields where `null` may not be allowed by TypeScript.\
 * > This is to better support optional fields, as well as packages that may use
 * > this definition. Such packages are expected to handle `null` values.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode CompilerOptionsValue}.
 *
 * @see https://www.typescriptlang.org/tsconfig#typeAcquisition
 */
interface TypeAcquisition {
  [option: string]: CompilerOptionsValue

  /**
   * Prevent TypeScript from inferring types based on filenames.
   */
  disableFilenameBasedTypeAcquisition?: boolean | null

  /**
   * Enable/disable auto type-acquisition.
   */
  enable?: boolean | null

  /**
   * Enable/disable auto type-acquisition.
   *
   * @deprecated Use {@linkcode enable} instead.
   */
  enableAutoDiscovery?: boolean | null

  /**
   * List of type declarations to be excluded from auto type-acquisition.
   */
  exclude?: string[] | null

  /**
   * List of type declarations to be included in auto type-acquisition.
   */
  include?: string[] | null
}

export type { TypeAcquisition as default }
