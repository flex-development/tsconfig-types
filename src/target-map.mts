/**
 * @file TargetMap
 * @module tsconfig-types/TargetMap
 */

/**
 * Registry of ECMAScript targets.
 *
 * @see https://www.typescriptlang.org/tsconfig/#target
 */
interface TargetMap {
  es3: 'es3'
  es5: 'es5'
  es6: 'es6'
  es2015: 'es2015'
  es2016: 'es2016'
  es2017: 'es2017'
  es2018: 'es2018'
  es2019: 'es2019'
  es2020: 'es2020'
  es2021: 'es2021'
  es2022: 'es2022'
  es2023: 'es2023'
  es2024: 'es2024'
  esnext: 'esnext'
  json: 'json'
}

export type { TargetMap as default }
