/**
 * @file ProjectReference
 * @module tsconfig-types/ProjectReference
 */

import type { JsonObject, JsonValue } from '@flex-development/tsconfig-types'

/**
 * A project to reference.
 *
 * Allows TypeScript programs to be structured into smaller pieces.
 *
 * > As it concerns optional fields, `null` is used instead of `undefined`, even
 * > in fields where `null` may not be allowed by TypeScript.\
 * > This is to better support optional fields, as well as packages that may use
 * > this definition. Such packages are expected to handle `null` values.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode JsonValue}.
 *
 * @see https://www.typescriptlang.org/docs/handbook/project-references.html
 * @see {@linkcode JsonObject}
 *
 * @extends {JsonObject}
 */
interface ProjectReference extends JsonObject {
  /**
   * Indicate the reference forms a circularity.
   */
  circular?: boolean | null

  /**
   * Path to reference as written by user.
   */
  originalPath?: string | null

  /**
   * Normalized path that points to a config file, or a directory containing a
   * config file.
   */
  path: string

  /**
   * Indicate if the reference should be prepended to project output.
   *
   * > 👉 **Note**: Only valid for [`--outFile`][outfile] compilations.
   *
   * [outfile]: https://www.typescriptlang.org/tsconfig#outFile
   */
  prepend?: boolean | null
}

export type { ProjectReference as default }
