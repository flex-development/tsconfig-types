/**
 * @file Enums - ModuleResolutionKind
 * @module tsconfig-types/enums/ModuleResolutionKind
 */

import type { ModuleResolution } from '#src/types'

/**
 * Module resolution strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#moduleResolution
 *
 * @enum {Lowercase<ModuleResolution>}
 */
enum ModuleResolutionKind {
  Classic = 'classic',
  NodeJs = 'node',
  Node16 = 'node16',
  NodeNext = 'nodenext'
}

export default ModuleResolutionKind
