/**
 * @file Type Tests - Paths
 * @module tsconfig-types/tests/unit-d/Paths
 */

import type TestSubject from '#lib/paths'
import type { JsonObject, MapLike } from '@flex-development/tsconfig-types'

describe('unit-d:Paths', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should equal MapLike<string[]>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<MapLike<string[]>>()
  })
})
