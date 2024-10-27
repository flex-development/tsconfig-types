/**
 * @file Type Tests - ImportsNotUsedAsValuesMap
 * @module tsconfig-types/tests/unit-d/ImportsNotUsedAsValuesMap
 */

import type TestSubject from '#lib/imports-not-used-as-values-map'

describe('unit-d:ImportsNotUsedAsValuesMap', () => {
  it('should match [error: "error"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('error').toEqualTypeOf<'error'>()
  })

  it('should match [preserve: "preserve"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserve')
      .toEqualTypeOf<'preserve'>()
  })

  it('should match [remove: "remove"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('remove')
      .toEqualTypeOf<'remove'>()
  })
})
