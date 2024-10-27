/**
 * @file Type Tests - ModuleResolution
 * @module tsconfig-types/tests/unit-d/ModuleResolution
 */

import type TestSubject from '#lib/module-resolution'
import type { ModuleResolutionMap } from '@flex-development/tsconfig-types'

describe('unit-d:ModuleResolution', () => {
  it('should equal ModuleResolutionMap[keyof ModuleResolutionMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<ModuleResolutionMap[keyof ModuleResolutionMap]>()
  })
})
