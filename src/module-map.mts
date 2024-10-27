/**
 * @file ModuleMap
 * @module tsconfig-types/ModuleMap
 */

/**
 * Registry of module systems.
 *
 * @see https://www.typescriptlang.org/tsconfig/#module
 */
interface ModuleMap {
  amd: 'amd'
  commonjs: 'commonjs'
  es6: 'es6'
  es2015: 'es2015'
  es2020: 'es2020'
  es2022: 'es2022'
  esnext: 'esnext'
  node16: 'node16'
  nodenext: 'nodenext'
  none: 'none'
  preserve: 'preserve'
  system: 'system'
  umd: 'umd'
}

export type { ModuleMap as default }
