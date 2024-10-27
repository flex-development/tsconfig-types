/**
 * @file Type Tests - NewLine
 * @module tsconfig-types/tests/unit-d/NewLine
 */

import type TestSubject from '#lib/new-line'
import type { NewLineMap } from '@flex-development/tsconfig-types'

describe('unit-d:NewLine', () => {
  it('should equal NewLineMap[keyof NewLineMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NewLineMap[keyof NewLineMap]>()
  })
})
