/**
 * @file Interfaces - ProjectReference
 * @module tsconfig-types/interfaces/tests/ProjectReference
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../project-reference'

describe('unit:interfaces/ProjectReference', () => {
  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [circular?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('circular')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [originalPath?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('originalPath')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [path: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('path').toBeString()
  })

  it('should match [prepend?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('prepend')
      .toEqualTypeOf<boolean | undefined>()
  })
})
