/**
 * @file Type Tests - BuildOptions
 * @module tsconfig-types/interfaces/tests/BuildOptions
 */

import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../build-options'

describe('unit:interfaces/BuildOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [assumeChangesOnlyAffectDirectDependencies?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('assumeChangesOnlyAffectDirectDependencies')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [dry?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dry')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [force?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('force')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [incremental?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('incremental')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [traceResolution?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('traceResolution')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [verbose?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('verbose')
      .toEqualTypeOf<boolean | undefined>()
  })
})
