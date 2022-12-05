/**
 * @file Unit Tests - ImportsNotUsedAsValues
 * @module tsconfig-types/types/tests/ImportsNotUsedAsValues
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../imports-not-used-as-values'

describe('unit:types/ImportsNotUsedAsValues', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "error"', () => {
    expectTypeOf<TestSubject>().extract<'error'>().toBeString()
  })

  it('should extract "preserve"', () => {
    expectTypeOf<TestSubject>().extract<'preserve'>().toBeString()
  })

  it('should extract "remove"', () => {
    expectTypeOf<TestSubject>().extract<'remove'>().toBeString()
  })
})
