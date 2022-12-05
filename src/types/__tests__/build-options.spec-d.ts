/**
 * @file Unit Tests - BuildOptions
 * @module tsconfig-types/types/tests/BuildOptions
 */

import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type TestSubject from '../build-options'

describe('unit:types/BuildOptions', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
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
