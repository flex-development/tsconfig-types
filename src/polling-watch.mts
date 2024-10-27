/**
 * @file PollingWatch
 * @module tsconfig-types/PollingWatch
 */

import type { PollingWatchMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered polling strategies that can be used when the system runs
 * out of native file watchers and/or doesn’t support native file watchers.
 *
 * To register new strategies, augment {@linkcode PollingWatchMap}. They will be
 * added to this union automatically.
 */
type PollingWatch = PollingWatchMap[keyof PollingWatchMap]

export type { PollingWatch as default }
