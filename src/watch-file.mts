/**
 * @file WatchFile
 * @module tsconfig-types/WatchFile
 */

import type { WatchFileMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered strategies used to watch individual files.
 *
 * To register new strategies, augment {@linkcode WatchFileMap}. They will be
 * added to this union automatically.
 */
type WatchFile = WatchFileMap[keyof WatchFileMap]

export type { WatchFile as default }
