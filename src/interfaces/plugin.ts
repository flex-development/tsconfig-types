/**
 * @file Interfaces - Plugin
 * @module tsconfig-types/interfaces/Plugin
 */

import type { JsonObject } from '@flex-development/tutils'

/**
 * Language service plugin.
 *
 * @see https://www.typescriptlang.org/tsconfig#plugins
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
