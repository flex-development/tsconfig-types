/**
 * @file ImportsNotUsedAsValuesMap
 * @module tsconfig-types/ImportsNotUsedAsValuesMap
 */

/**
 * Registry of options to control how `import` works.
 *
 * @see https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues
 */
interface ImportsNotUsedAsValuesMap {
  error: 'error'
  preserve: 'preserve'
  remove: 'remove'
}

export type { ImportsNotUsedAsValuesMap as default }
