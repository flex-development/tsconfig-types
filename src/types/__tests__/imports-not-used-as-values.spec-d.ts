/**
 * @file Unit Tests - ImportsNotUsedAsValues
 * @module tsconfig-types/types/tests/ImportsNotUsedAsValues
 */

import type TestSubject from '../imports-not-used-as-values'

describe('unit:types/ImportsNotUsedAsValues', () => {
  it('should allow "error"', () => {
    assertType<TestSubject>('error')
  })

  it('should allow "preserve"', () => {
    assertType<TestSubject>('preserve')
  })

  it('should allow "remove"', () => {
    assertType<TestSubject>('remove')
  })
})
