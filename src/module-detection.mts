/**
 * @file ModuleDetection
 * @module tsconfig-types/ModuleDetection
 */

import type { ModuleDetectionMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered options to control how TypeScript determines whether a file
 * is a script or a module.
 *
 * To register new options, augment {@linkcode ModuleDetectionMap}. They will be
 * added to this union automatically.
 */
type ModuleDetection = ModuleDetectionMap[keyof ModuleDetectionMap]

export type { ModuleDetection as default }
