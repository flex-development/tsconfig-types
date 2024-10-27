/**
 * @file Type Tests - TypeAcquisition
 * @module tsconfig-types/tests/unit-d/TypeAcquisition
 */

import type TestSubject from '#lib/type-acquisition'
import type {
  CompilerOptionsValue,
  JsonObject
} from '@flex-development/tsconfig-types'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:TypeAcquisition', () => {
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

  it('should match [disableFilenameBasedTypeAcquisition?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableFilenameBasedTypeAcquisition')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [enable?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enable')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [enableAutoDiscovery?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enableAutoDiscovery')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [exclude?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exclude')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [include?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('include')
      .toEqualTypeOf<Nilable<string[]>>()
  })
})
