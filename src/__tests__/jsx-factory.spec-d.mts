/**
 * @file Type Tests - JsxFactory
 * @module tsconfig-types/tests/unit-d/JsxFactory
 */

import type TestSubject from '#lib/jsx-factory'
import type { JsxFactoryMap } from '@flex-development/tsconfig-types'

describe('unit-d:JsxFactory', () => {
  it('should equal JsxFactoryMap[keyof JsxFactoryMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<JsxFactoryMap[keyof JsxFactoryMap]>()
  })
})
