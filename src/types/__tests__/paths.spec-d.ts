/**
 * @file Type Tests - Paths
 * @module tsconfig-types/types/tests/Paths
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../paths'

describe('unit:types/Paths', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should only have string[] values', () => {
    expectTypeOf<TestSubject[string]>().toEqualTypeOf<string[]>()
  })
})
