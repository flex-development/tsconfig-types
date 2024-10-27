/**
 * @file Type Tests - JsxFragmentFactory
 * @module tsconfig-types/tests/unit-d/JsxFragmentFactory
 */

import type TestSubject from '#lib/jsx-fragment-factory'
import type { JsxFragmentFactoryMap } from '@flex-development/tsconfig-types'

describe('unit-d:JsxFragmentFactory', () => {
  it('should equal JsxFragmentFactoryMap[keyof JsxFragmentFactoryMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<JsxFragmentFactoryMap[keyof JsxFragmentFactoryMap]>()
  })
})
