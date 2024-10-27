/**
 * @file ModuleDetectionMap
 * @module tsconfig-types/ModuleDetectionMap
 */

/**
 * Registry of options to control how TypeScript determines whether a file is a
 * [script or a module][script-or-module].
 *
 * [script-or-module]: https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript
 *
 * @see https://www.typescriptlang.org/tsconfig/#moduleDetection
 */
interface ModuleDetectionMap {
  auto: 'auto'
  force: 'force'
  legacy: 'legacy'
}

export type { ModuleDetectionMap as default }
