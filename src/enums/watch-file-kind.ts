/**
 * @file Enums - WatchFileKind
 * @module tsconfig-types/enums/WatchFileKind
 */

import type { WatchFile } from '#src/types'

/**
 * File watching strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-watchFile
 *
 * @enum {Lowercase<WatchFile>}
 */
enum WatchFileKind {
  DynamicPriorityPolling = 'dynamicprioritypolling',
  FixedChunkSizePolling = 'fixedchunksizepolling',
  FixedPollingInterval = 'fixedpollinginterval',
  PriorityPollingInterval = 'prioritypollinginterval',
  UseFsEvents = 'usefsevents',
  UseFsEventsOnParentDirectory = 'usefseventsonparentdirectory'
}

export default WatchFileKind
