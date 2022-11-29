/**
 * @file Enums - ImportsNotUsedKind
 * @module tsconfig-types/enums/ImportsNotUsedKind
 */

import type { ImportsNotUsedAsValues } from '#src/types'

/**
 * Controls how `import` works.
 *
 * @see https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues
 *
 * @enum {Lowercase<ImportsNotUsedAsValues>}
 */
enum ImportsNotUsedKind {
  Error = 'error',
  Preserve = 'preserve',
  Remove = 'remove'
}

export default ImportsNotUsedKind
