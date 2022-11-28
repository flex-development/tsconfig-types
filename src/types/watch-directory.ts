/**
 * @file Type Definitions - WatchDirectory
 * @module tsconfig-types/types/WatchDirectory
 */

/**
 * Directory watching strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-watchDirectory
 */
type WatchDirectory =
  | 'dynamicPriorityPolling'
  | 'fixedChunkSizePolling'
  | 'fixedPollingInterval'
  | 'useFsEvents'

export type { WatchDirectory as default }
