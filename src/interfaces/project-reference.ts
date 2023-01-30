/**
 * @file Type Definitions - ProjectReference
 * @module tsconfig-types/types/ProjectReference
 */

import type { JsonObject } from '@flex-development/tutils'

/**
 * A project to reference.
 *
 * Allows TypeScript programs to be structured into smaller pieces.
 *
 * @see https://www.typescriptlang.org/docs/handbook/project-references.html
 *
 * @extends {JsonObject}
 */
interface ProjectReference extends JsonObject {
  /**
   * Indicates if the reference forms a circularity.
   */
  circular?: boolean

  /**
   * Path to reference as written by user.
   */
  originalPath?: string

  /**
   * A normalized path that points to a directory containing a `tsconfig.json`
   * file, or the config file itself.
   */
  path: string

  /**
   * Indicates if the reference should be prepended to project output.
   *
   * **Note**: Only valid for [`--outFile`][1] compilations.
   *
   * [1]: https://www.typescriptlang.org/tsconfig#outFile
   */
  prepend?: boolean
}

export type { ProjectReference as default }
