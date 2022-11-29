/**
 * @file Interfaces - WatchOptions
 * @module tsconfig-types/interfaces/WatchOptions
 */

import type {
  CompilerOptionsValue,
  PollingWatch,
  WatchDirectory,
  WatchFile
} from '#src/types'

/**
 * File and directory watching options.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-options
 */
interface WatchOptions {
  [option: string]: CompilerOptionsValue | undefined

  /**
   * Specifies a list of directories to exclude from watch.
   */
  excludeDirectories?: string[]

  /**
   * Specifies a list of files to exclude from watch.
   */
  excludeFiles?: string[]

  /**
   * Specifies the polling strategy that gets used when the system runs out of
   * native file watchers and/or doesn’t support native file watchers.
   *
   * **Note**: Only applicable when using file-system events.
   */
  fallbackPolling?: PollingWatch

  /**
   * Synchronously call callbacks and update the state of directory watchers on
   * platforms that don't support recursive watching natively.
   */
  synchronousWatchDirectory?: boolean

  /**
   * Strategy for how entire directory trees are watched under systems that lack
   * recursive file-watching functionality.
   *
   * @default 'useFsEvents'
   */
  watchDirectory?: WatchDirectory

  /**
   * Strategy for how individual files are watched.
   *
   * @default 'useFsEvents'
   */
  watchFile?: WatchFile
}

export type { WatchOptions as default }
