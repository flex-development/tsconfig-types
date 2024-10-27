/**
 * @file FallbackPolling
 * @module tsconfig-types/FallbackPolling
 */

import type { FallbackPollingMap } from '@flex-development/tsconfig-types'

/**
 * Union of registered polling strategies that can be used when the system runs
 * out of native file watchers and/or doesn’t support native file watchers.
 *
 * To register new strategies, augment {@linkcode FallbackPollingMap}. They will
 * be added to this union automatically.
 */
type FallbackPolling = FallbackPollingMap[keyof FallbackPollingMap]

export type { FallbackPolling as default }
