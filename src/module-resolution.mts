/**
 * @file ModuleResolution
 * @module tsconfig-types/ModuleResolution
 */

import type { ModuleResolutionMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered module resolution strategies.
 *
 * To register new module systems, augment {@linkcode ModuleResolutionMap}. They
 * will be added to this union automatically.
 */
type ModuleResolution = ModuleResolutionMap[keyof ModuleResolutionMap]

export type { ModuleResolution as default }
