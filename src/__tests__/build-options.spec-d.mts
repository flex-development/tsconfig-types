/**
 * @file Type Tests - BuildOptions
 * @module tsconfig-types/tests/unit-d/BuildOptions
 */

import type TestSubject from '#lib/build-options'
import type {
  CompilerOptionsValue,
  JsonObject
} from '@flex-development/tsconfig-types'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:BuildOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [[option: string]: CompilerOptionsValue]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<string>('')
      .toEqualTypeOf<CompilerOptionsValue>()
  })

  it('should match [assumeChangesOnlyAffectDirectDependencies?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('assumeChangesOnlyAffectDirectDependencies')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [dry?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dry')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [force?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('force')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [incremental?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('incremental')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [traceResolution?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('traceResolution')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [verbose?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('verbose')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
