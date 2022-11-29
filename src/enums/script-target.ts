/**
 * @file Enums - ScriptTarget
 * @module tsconfig-types/enums/ScriptTarget
 */

import type { Target } from '#src/types'

/**
 * ECMAScript targets.
 *
 * @see https://www.typescriptlang.org/tsconfig#target
 *
 * @enum {Lowercase<Target>}
 */
enum ScriptTarget {
  ES3 = 'es3',
  ES5 = 'es5',
  ES6 = 'es6',
  ES2015 = 'es2015',
  ES2016 = 'es2016',
  ES2017 = 'es2017',
  ES2018 = 'es2018',
  ES2019 = 'es2019',
  ES2020 = 'es2020',
  ES2021 = 'es2021',
  ES2022 = 'es2022',
  ESNext = 'esnext'
}

export default ScriptTarget
