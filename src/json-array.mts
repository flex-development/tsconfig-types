/**
 * @file JsonArray
 * @module tsconfig-types/JsonArray
 */

import type { JsonValue } from '@flex-development/tsconfig-types'

/**
 * An array containing [JSON values][json-data-types].
 *
 * [json-data-types]: https://restfulapi.net/json-data-types
 */
type JsonArray = JsonValue[] | readonly JsonValue[]

export type { JsonArray as default }
