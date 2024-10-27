/**
 * @file Type Tests - JsxEmit
 * @module tsconfig-types/tests/unit-d/JsxEmit
 */

import type TestSubject from '#lib/jsx-emit'
import type { JsxEmitMap } from '@flex-development/tsconfig-types'

describe('unit-d:JsxEmit', () => {
  it('should equal JsxEmitMap[keyof JsxEmitMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<JsxEmitMap[keyof JsxEmitMap]>()
  })
})
