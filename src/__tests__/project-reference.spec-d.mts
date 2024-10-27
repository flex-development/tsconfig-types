/**
 * @file ProjectReference
 * @module tsconfig-types/tests/unit-d/ProjectReference
 */

import type TestSubject from '#lib/project-reference'
import type { JsonObject } from '@flex-development/tsconfig-types'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:ProjectReference', () => {
  it('should extend json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [circular?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('circular')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [originalPath?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('originalPath')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [path: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('path').toEqualTypeOf<string>()
  })

  it('should match [prepend?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepend')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
