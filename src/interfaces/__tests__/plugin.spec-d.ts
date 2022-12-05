/**
 * @file Unit Tests - Plugin
 * @module tsconfig-types/interfaces/tests/Plugin
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../plugin'

describe('unit:interfaces/Plugin', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [name?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<string | undefined>()
  })
})
