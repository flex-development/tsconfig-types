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
  Bundler = 'bundler',
  Classic = 'classic',
  Node10 = 'node10',
  Node16 = 'node16',
  NodeJs = 'node',
  NodeNext = 'nodenext'
}

export default ModuleResolutionKind
