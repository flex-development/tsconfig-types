/**
 * @file Type Definitions - WatchFile
 * @module tsconfig-types/types/WatchFile
 */

/**
 * File watching strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-watchFile
 */
type WatchFile =
  | 'dynamicPriorityPolling'
  | 'fixedChunkSizePolling'
  | 'fixedPollingInterval'
  | 'priorityPollingInterval'
  | 'useFsEvents'
  | 'useFsEventsOnParentDirectory'

export type { WatchFile as default }
