/**
 * @file Unit Tests - NewLine
 * @module tsconfig-types/types/tests/NewLine
 */

import type TestSubject from '../new-line'

describe('unit:types/NewLine', () => {
  it('should allow "CRLF"', () => {
    assertType<TestSubject>('CRLF')
  })

  it('should allow "LF"', () => {
    assertType<TestSubject>('LF')
  })

  describe('lowercase', () => {
    it('should allow "crlf"', () => {
      assertType<TestSubject>('crlf')
    })

    it('should allow "lf"', () => {
      assertType<TestSubject>('lf')
    })
  })
})
