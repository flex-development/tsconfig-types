/**
 * @file Module
 * @module tsconfig-types/Module
 */

import type { ModuleMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered module systems.
 *
 * To register new module systems, augment {@linkcode ModuleMap}. They will be
 * added to this union automatically.
 */
type Module = ModuleMap[keyof ModuleMap]

export type { Module as default }
