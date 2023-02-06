/**
 * @file Type Tests - LibFile
 * @module tsconfig-types/types/tests/LibFile
 */

import type { JsonValue } from '@flex-development/tutils'
import type Lib from '../lib'
import type TestSubject from '../lib-file'

describe('unit:types/LibFile', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should equal type of Lowercase<`lib.${Lib}.d.ts`>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Lowercase<`lib.${Lib}.d.ts`>>()
  })
})
