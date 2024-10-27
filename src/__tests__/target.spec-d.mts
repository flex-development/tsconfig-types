/**
 * @file Type Tests - Target
 * @module tsconfig-types/tests/unit-d/Target
 */

import type TestSubject from '#lib/target'
import type { TargetMap } from '@flex-development/tsconfig-types'

describe('unit-d:Target', () => {
  it('should equal TargetMap[keyof TargetMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<TargetMap[keyof TargetMap]>()
  })
})
