/**
 * @file WatchDirectory
 * @module tsconfig-types/WatchDirectory
 */

import type { WatchDirectoryMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered strategies used to watch directory trees under systems
 * that lack recursive file-watching functionality.
 *
 * To register new strategies, augment {@linkcode WatchDirectoryMap}. They will
 * be added to this union automatically.
 */
type WatchDirectory = WatchDirectoryMap[keyof WatchDirectoryMap]

export type { WatchDirectory as default }
