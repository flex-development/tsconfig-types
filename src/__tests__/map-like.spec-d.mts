/**
 * @file Type Tests - MapLike
 * @module tsconfig-types/tests/unit-d/MapLike
 */

import type TestSubject from '#lib/map-like'
import type { CompilerOptionsValue } from '@flex-development/tsconfig-types'

describe('unit-d:MapLike', () => {
  type T = CompilerOptionsValue

  it('should allow empty object', () => {
    assertType<TestSubject<T>>({})
  })

  it('should match [[key: string]: T]', () => {
    expectTypeOf<TestSubject<T>>().toHaveProperty<string>('').toEqualTypeOf<T>()
  })
})
