/**
 * @file Type Definitions - PollingWatch
 * @module tsconfig-types/types/PollingWatch
 */

import type FallbackPolling from './fallback-polling'

/**
 * Polling strategies used when the system runs out of native file watchers
 * and/or doesn’t support native file watchers.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-fallbackPolling
 */
type PollingWatch = FallbackPolling | 'synchronousWatchDirectory'

export type { PollingWatch as default }
