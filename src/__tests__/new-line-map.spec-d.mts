/**
 * @file Type Tests - NewLineMap
 * @module tsconfig-types/tests/unit-d/NewLineMap
 */

import type TestSubject from '#lib/new-line-map'

describe('unit-d:NewLineMap', () => {
  it('should match [crlf: "crlf"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('crlf').toEqualTypeOf<'crlf'>()
  })

  it('should match [lf: "lf"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('lf').toEqualTypeOf<'lf'>()
  })
})
