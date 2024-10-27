/**
 * @file WatchDirectoryMap
 * @module tsconfig-types/WatchDirectoryMap
 */

/**
 * Registry of strategies used to watch directory trees under systems that lack
 * recursive file-watching functionality.
 *
 * @see https://www.typescriptlang.org/tsconfig/#watch-watchDirectory
 */
interface WatchDirectoryMap {
  dynamicPriorityPolling: 'dynamicprioritypolling'
  fixedChunkSizePolling: 'fixedchunksizepolling'
  fixedPollingInterval: 'fixedpollinginterval'
  useFsEvents: 'usefsevents'
}

export type { WatchDirectoryMap as default }
