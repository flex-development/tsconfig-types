/**
 * @file Type Tests - JsxImportSourceMap
 * @module tsconfig-types/tests/unit-d/JsxImportSourceMap
 */

import type TestSubject from '#lib/jsx-import-source-map'

describe('unit-d:JsxImportSourceMap', () => {
  it('should match [preact: "preact"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preact')
      .toEqualTypeOf<'preact'>()
  })

  it('should match [react: "react"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('react').toEqualTypeOf<'react'>()
  })
})
