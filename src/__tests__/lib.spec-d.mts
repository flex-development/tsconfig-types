/**
 * @file Type Tests - Lib
 * @module tsconfig-types/tests/unit-d/Lib
 */

import type TestSubject from '#lib/lib'
import type { LibMap } from '@flex-development/tsconfig-types'

describe('unit-d:Lib', () => {
  it('should equal LibMap[keyof LibMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<LibMap[keyof LibMap]>()
  })
})
