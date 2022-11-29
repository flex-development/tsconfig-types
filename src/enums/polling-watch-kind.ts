/**
 * @file Enums - PollingWatchKind
 * @module tsconfig-types/enums/PollingWatchKind
 */

import type { PollingWatch } from '#src/types'

/**
 * Polling strategies used when the system runs out of native file watchers
 * and/or doesn’t support native file watchers.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-fallbackPolling
 *
 * @enum {Exclude<PollingWatch, Lowercase<string>>}
 */
enum PollingWatchKind {
  DynamicPriority = 'dynamicPriorityPolling',
  FixedChunkSize = 'fixedChunkSize',
  FixedInterval = 'fixedPollingInterval',
  PriorityInterval = 'priorityPollingInterval',
  SynchronousWatchDirectory = 'synchronousWatchDirectory'
}

export default PollingWatchKind
