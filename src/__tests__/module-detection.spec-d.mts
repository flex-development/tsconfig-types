/**
 * @file Type Tests - ModuleDetection
 * @module tsconfig-types/tests/unit-d/ModuleDetection
 */

import type TestSubject from '#lib/module-detection'
import type { ModuleDetectionMap } from '@flex-development/tsconfig-types'

describe('unit-d:ModuleDetection', () => {
  it('should equal ModuleDetectionMap[keyof ModuleDetectionMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<ModuleDetectionMap[keyof ModuleDetectionMap]>()
  })
})
