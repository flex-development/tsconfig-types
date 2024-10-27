/**
 * @file Plugin
 * @module tsconfig-types/Plugin
 */

import type { JsonObject } from '@flex-development/tsconfig-types'

/**
 * Language service plugin.
 *
 * @see https://www.typescriptlang.org/tsconfig#plugins
 * @see {@linkcode JsonObject}
 *
 * @extends {JsonObject}
 */
interface Plugin extends JsonObject {
  /**
   * Plugin name.
   */
  name: string
}

export type { Plugin as default }
