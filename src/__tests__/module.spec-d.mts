/**
 * @file Type Tests - Module
 * @module tsconfig-types/tests/unit-d/Module
 */

import type TestSubject from '#lib/module'
import type { ModuleMap } from '@flex-development/tsconfig-types'

describe('unit-d:Module', () => {
  it('should equal ModuleMap[keyof ModuleMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<ModuleMap[keyof ModuleMap]>()
  })
})
