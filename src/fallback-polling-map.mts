/**
 * @file FallbackPollingMap
 * @module tsconfig-types/FallbackPollingMap
 */

/**
 * Registry of polling strategies that can be used when the system runs out of
 * native file watchers and/or doesn’t support native file watchers.
 *
 * @see https://www.typescriptlang.org/tsconfig/#watch-fallbackPolling
 */
interface FallbackPollingMap {
  dynamicPriority: 'dynamicPriority'
  dynamicPriorityPolling: 'dynamicPriorityPolling'
  fixedChunkSize: 'fixedChunkSize'
  fixedInterval: 'fixedInterval'
  fixedPollingInterval: 'fixedPollingInterval'
  priorityInterval: 'priorityInterval'
  priorityPollingInterval: 'priorityPollingInterval'
}

export type { FallbackPollingMap as default }
