/**
 * @file Type Tests - NewLine
 * @module tsconfig-types/types/tests/NewLine
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../new-line'

describe('unit:types/NewLine', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"CRLF">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'CRLF'>>().toBeString()
  })

  it('should extract OrLowercase<"LF">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'LF'>>().toBeString()
  })
})
