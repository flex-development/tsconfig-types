/**
 * @file Type Definitions - WatchFile
 * @module tsconfig-types/types/WatchFile
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * File watching strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-watchFile
 */
type WatchFile = OrLowercase<
  | 'dynamicPriorityPolling'
  | 'fixedChunkSizePolling'
  | 'fixedPollingInterval'
  | 'priorityPollingInterval'
  | 'useFsEvents'
  | 'useFsEventsOnParentDirectory'
>

export type { WatchFile as default }
