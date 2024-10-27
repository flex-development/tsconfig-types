/**
 * @file ModuleResolutionMap
 * @module tsconfig-types/ModuleResolutionMap
 */

/**
 * Registry of module resolution strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig/#moduleResolution
 */
interface ModuleResolutionMap {
  bundler: 'bundler'
  classic: 'classic'
  node10: 'node10'
  node16: 'node16'
  node: 'node'
  nodenext: 'nodenext'
}

export type { ModuleResolutionMap as default }
