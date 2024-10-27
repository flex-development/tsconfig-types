/**
 * @file PollingWatchMap
 * @module tsconfig-types/PollingWatchMap
 */

/**
 * Registry of polling strategies that can be used when the system runs out of
 * native file watchers and/or doesn’t support native file watchers.
 *
 * @see https://www.typescriptlang.org/tsconfig/#watch-fallbackPolling
 */
interface PollingWatchMap {
  dynamicPriority: 'dynamicpriority'
  fixedChunkSize: 'fixedchunksize'
  fixedInterval: 'fixedinterval'
  priorityInterval: 'priorityinterval'
}

export type { PollingWatchMap as default }
