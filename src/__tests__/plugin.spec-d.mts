/**
 * @file Type Tests - Plugin
 * @module tsconfig-types/tests/unit-d/Plugin
 */

import type TestSubject from '#lib/plugin'
import type { JsonObject } from '@flex-development/tsconfig-types'

describe('unit-d:Plugin', () => {
  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('name').toEqualTypeOf<string>()
  })
})
