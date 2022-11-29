/**
 * @file Enums - WatchDirectoryKind
 * @module tsconfig-types/enums/WatchDirectoryKind
 */

import type { WatchDirectory } from '#src/types'

/**
 * Directory watching strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-watchDirectory
 *
 * @enum {Lowercase<WatchDirectory>}
 */
enum WatchDirectoryKind {
  DynamicPriorityPolling = 'dynamicprioritypolling',
  FixedChunkSizePolling = 'fixedchunksizepolling',
  FixedPollingInterval = 'fixedpollinginterval',
  PriorityPollingInterval = 'prioritypollinginterval',
  UseFsEvents = 'usefsevents'
}

export default WatchDirectoryKind
