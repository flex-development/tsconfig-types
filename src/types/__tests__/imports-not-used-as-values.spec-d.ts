/**
 * @file Unit Tests - ImportsNotUsedAsValues
 * @module tsconfig-types/types/tests/ImportsNotUsedAsValues
 */

import { ImportsNotUsedKind } from '#src/enums'
import type TestSubject from '../imports-not-used-as-values'

describe('unit:types/ImportsNotUsedAsValues', () => {
  it('should allow "error"', () => {
    assertType<TestSubject>(ImportsNotUsedKind.Error)
  })

  it('should allow "preserve"', () => {
    assertType<TestSubject>(ImportsNotUsedKind.Preserve)
  })

  it('should allow "remove"', () => {
    assertType<TestSubject>(ImportsNotUsedKind.Remove)
  })
})
