/**
 * @file ImportsNotUsedAsValues
 * @module tsconfig-types/ImportsNotUsedAsValues
 */

import type {
  ImportsNotUsedAsValuesMap
} from '@flex-development/tsconfig-types'

/**
 * Union of registered options to control how `import` works.
 *
 * To register new options, augment {@linkcode ImportsNotUsedAsValuesMap}. They
 * will be added to this union automatically.
 */
type ImportsNotUsedAsValues =
  ImportsNotUsedAsValuesMap[keyof ImportsNotUsedAsValuesMap]

export type { ImportsNotUsedAsValues as default }
