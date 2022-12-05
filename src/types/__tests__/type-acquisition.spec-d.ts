/**
 * @file Unit Tests - TypeAcquisition
 * @module tsconfig-types/types/tests/TypeAcquisition
 */

import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type TestSubject from '../type-acquisition'

describe('unit:interfaces/TypeAcquisition', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [disableFilenameBasedTypeAcquisition?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableFilenameBasedTypeAcquisition')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [enable?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enable')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [enableAutoDiscovery?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enableAutoDiscovery')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [exclude?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exclude')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [include?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('include')
      .toEqualTypeOf<string[] | undefined>()
  })
})
