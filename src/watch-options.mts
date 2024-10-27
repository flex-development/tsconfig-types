/**
 * @file WatchOptions
 * @module tsconfig-types/WatchOptions
 */

import type {
  CompilerOptionsValue,
  PollingWatch,
  WatchDirectory,
  WatchFile
} from '@flex-development/tsconfig-types'

/**
 * File and directory watching options.
 *
 * > As it concerns optional fields, `null` is used instead of `undefined`, even
 * > in fields where `null` may not be allowed by TypeScript.\
 * > This is to better support optional fields, as well as packages that may use
 * > this definition. Such packages are expected to handle `null` values.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode CompilerOptionsValue}.
 *
 * @see https://www.typescriptlang.org/tsconfig#watch-options
 */
interface WatchOptions {
  [option: string]: CompilerOptionsValue

  /**
   * List of directories to exclude from watch.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-excludeDirectories
   */
  excludeDirectories?: string[] | null

  /**
   * List of files to exclude from watch.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-excludeDirectories
   */
  excludeFiles?: string[] | null

  /**
   * Polling strategy to use when the system runs out of native file watchers
   * and/or doesn’t support native file watchers.
   *
   * > 👉 **Note**: Only applicable when using file-system events.
   *
   * @see {@linkcode PollingWatch}
   */
  fallbackPolling?: PollingWatch | null

  /**
   * Synchronously call callbacks and update the state of directory watchers on
   * platforms that don't support recursive watching natively.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-synchronousWatchDirectory
   */
  synchronousWatchDirectory?: boolean | null

  /**
   * Strategy used to watch directory trees under systems that lack recursive
   * file-watching functionality.
   *
   * @see {@linkcode WatchDirectory}
   *
   * @default 'useFsEvents'
   */
  watchDirectory?: WatchDirectory | null

  /**
   * Strategy used to watch individual files are.
   *
   * @see {@linkcode WatchFile}
   *
   * @default 'useFsEvents'
   */
  watchFile?: WatchFile | null
}

export type { WatchOptions as default }
