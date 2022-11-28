/**
 * @file Interfaces - Plugin
 * @module tsconfig-types/interfaces/Plugin
 */

import type { JSONObject } from '@flex-development/tutils'

/**
 * Language service plugin.
 *
 * @see https://www.typescriptlang.org/tsconfig#plugins
 *
 * @extends {JSONObject}
 */
interface Plugin extends JSONObject {
  /**
   * Plugin name.
   */
  name?: string
}

export type { Plugin as default }
