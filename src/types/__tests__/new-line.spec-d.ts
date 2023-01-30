/**
 * @file Type Tests - NewLine
 * @module tsconfig-types/types/tests/NewLine
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../new-line'

describe('unit:types/NewLine', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "CRLF"', () => {
    expectTypeOf<TestSubject>().extract<'CRLF'>().toBeString()
  })

  it('should extract "LF"', () => {
    expectTypeOf<TestSubject>().extract<'LF'>().toBeString()
  })

  describe('lowercase', () => {
    it('should extract "crlf"', () => {
      expectTypeOf<TestSubject>().extract<'crlf'>().toBeString()
    })

    it('should extract "lf"', () => {
      expectTypeOf<TestSubject>().extract<'lf'>().toBeString()
    })
  })
})
