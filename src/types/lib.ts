/**
 * @file Type Definitions - Lib
 * @module tsconfig-types/types/Lib
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * Default set of type definitions to include.
 *
 * @see https://www.typescriptlang.org/tsconfig#lib
 */
type Lib = OrLowercase<
  | 'DOM.Iterable'
  | 'DOM'
  | 'ES5'
  | 'ES6'
  | 'ES7'
  | 'ES2015.Collection'
  | 'ES2015.Core'
  | 'ES2015.Generator'
  | 'ES2015.Iterable'
  | 'ES2015.Promise'
  | 'ES2015.Proxy'
  | 'ES2015.Reflect'
  | 'ES2015.Symbol.WellKnown'
  | 'ES2015.Symbol'
  | 'ES2015'
  | 'ES2016.Array.Include'
  | 'ES2016'
  | 'ES2017.Intl'
  | 'ES2017.Object'
  | 'ES2017.SharedMemory'
  | 'ES2017.String'
  | 'ES2017.TypedArrays'
  | 'ES2017'
  | 'ES2018.AsyncGenerator'
  | 'ES2018.AsyncIterable'
  | 'ES2018.Intl'
  | 'ES2018.Promise'
  | 'ES2018.Regexp'
  | 'ES2018'
  | 'ES2019.Array'
  | 'ES2019.Object'
  | 'ES2019.String'
  | 'ES2019.Symbol'
  | 'ES2019'
  | 'ES2020.BigInt'
  | 'ES2020.Intl'
  | 'ES2020.Promise'
  | 'ES2020.SharedMemory'
  | 'ES2020.String'
  | 'ES2020.Symbol.WellKnown'
  | 'ES2020'
  | 'ES2021.Promise'
  | 'ES2021.String'
  | 'ES2021.WeakRef'
  | 'ES2021'
  | 'ESNext.Array'
  | 'ESNext.AsyncIterable'
  | 'ESNext.BigInt'
  | 'ESNext.Intl'
  | 'ESNext.Promise'
  | 'ESNext.String'
  | 'ESNext.Symbol'
  | 'ESNext.WeakRef'
  | 'ESNext'
  | 'ScriptHost'
  | 'WebWorker.ImportScripts'
  | 'WebWorker.Iterable'
  | 'WebWorker'
>

export type { Lib as default }
