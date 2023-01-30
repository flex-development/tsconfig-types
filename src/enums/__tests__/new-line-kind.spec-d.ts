/**
 * @file Unit Tests - NewLineKind
 * @module tsconfig-types/enums/tests/NewLineKind
 */

import type { NewLine } from '#src/types'
import type TestSubject from '../new-line-kind'

describe('unit:enums/NewLineKind', () => {
  it('should have members match Lowercase<NewLine>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<NewLine>>()
  })

  it('should match [CarriageReturnLineFeed = "crlf"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CarriageReturnLineFeed')
      .toMatchTypeOf<'crlf'>()
  })

  it('should match [LineFeed = "lf"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LineFeed')
      .toMatchTypeOf<'lf'>()
  })
})
