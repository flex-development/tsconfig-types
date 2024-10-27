/**
 * @file Type Tests - JsxImportSource
 * @module tsconfig-types/tests/unit-d/JsxImportSource
 */

import type TestSubject from '#lib/jsx-import-source'
import type { JsxImportSourceMap } from '@flex-development/tsconfig-types'

describe('unit-d:JsxImportSource', () => {
  it('should equal JsxImportSourceMap[keyof JsxImportSourceMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<JsxImportSourceMap[keyof JsxImportSourceMap]>()
  })
})
