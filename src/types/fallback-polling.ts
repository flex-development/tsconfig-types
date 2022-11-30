/**
 * @file Type Definitions - FallbackPolling
 * @module tsconfig-types/types/FallbackPolling
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * Polling strategies used when the system runs out of native file watchers
 * and/or doesn’t support native file watchers.
 *
 * [1]: ./polling-watch.ts
 *
 * @deprecated Use [`PollingWatch`][1] instead
 */
type FallbackPolling =
  | OrLowercase<'fixedChunkSize'>
  | 'dynamicpriority'
  | 'dynamicPriorityPolling'
  | 'fixedinterval'
  | 'fixedPollingInterval'
  | 'priorityinterval'
  | 'priorityPollingInterval'

export type { FallbackPolling as default }
