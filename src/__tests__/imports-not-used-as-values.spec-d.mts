/**
 * @file Type Tests - ImportsNotUsedAsValues
 * @module tsconfig-types/tests/unit-d/ImportsNotUsedAsValues
 */

import type TestSubject from '#lib/imports-not-used-as-values'
import type {
  ImportsNotUsedAsValuesMap
} from '@flex-development/tsconfig-types'

describe('unit-d:ImportsNotUsedAsValues', () => {
  it('should equal ImportsNotUsedAsValuesMap[keyof ImportsNotUsedAsValuesMap]', () => {
    // Arrange
    type Expect = ImportsNotUsedAsValuesMap[keyof ImportsNotUsedAsValuesMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
