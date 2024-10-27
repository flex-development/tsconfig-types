/**
 * @file WatchFileMap
 * @module tsconfig-types/WatchFileMap
 */

import type { WatchDirectoryMap } from '@flex-development/tsconfig-types'

/**
 * Registry of strategies used to watch individual files.
 *
 * @see https://www.typescriptlang.org/tsconfig/#watch-watchFile
 * @see {@linkcode WatchDirectoryMap}
 *
 * @extends {WatchDirectoryMap}
 */
interface WatchFileMap extends WatchDirectoryMap {
  priorityPollingInterval: 'prioritypollinginterval'
  useFsEventsOnParentDirectory: 'usefseventsonparentdirectory'
}

export type { WatchFileMap as default }
