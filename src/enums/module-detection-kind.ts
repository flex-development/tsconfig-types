/**
 * @file Enums - ModuleDetectionKind
 * @module tsconfig-types/enums/ModuleDetectionKind
 */

import type { ModuleDetection } from '#src/types'

/**
 * Module detection algorithms.
 *
 * @see https://www.typescriptlang.org/tsconfig#moduleDetection
 *
 * @enum {Lowercase<ModuleDetection>}
 */
enum ModuleDetectionKind {
  Auto = 'auto',
  Force = 'force',
  Legacy = 'legacy'
}

export default ModuleDetectionKind
