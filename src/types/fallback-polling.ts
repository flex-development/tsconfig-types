/**
 * @file Type Definitions - FallbackPolling
 * @module tsconfig-types/types/FallbackPolling
 */

/**
 * Polling strategies used when the system runs out of native file watchers
 * and/or doesn’t support native file watchers.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-fallbackPolling
 */
type FallbackPolling =
  | 'dynamicPriority'
  | 'dynamicPriorityPolling'
  | 'fixedChunkSize'
  | 'fixedInterval'
  | 'fixedPollingInterval'
  | 'priorityInterval'
  | 'priorityPollingInterval'
  | 'synchronousWatchDirectory'

export type { FallbackPolling as default }
