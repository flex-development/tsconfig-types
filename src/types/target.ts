/**
 * @file Type Definitions - Target
 * @module tsconfig-types/types/Target
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * ECMAScript targets.
 *
 * @see https://www.typescriptlang.org/tsconfig#target
 */
type Target = OrLowercase<
  | 'ES3'
  | 'ES5'
  | 'ES6'
  | 'ES2015'
  | 'ES2016'
  | 'ES2017'
  | 'ES2018'
  | 'ES2019'
  | 'ES2020'
  | 'ES2021'
  | 'ES2022'
  | 'ESNext'
>

export type { Target as default }
