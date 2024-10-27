/**
 * @file Type Tests - CompilerOption
 * @module tsconfig-types/tests/unit-d/CompilerOption
 */

import type TestSubject from '#lib/compiler-option'
import type { CompilerOptions } from '@flex-development/tsconfig-types'

describe('unit-d:CompilerOption', () => {
  it('should equal keyof CompilerOptions', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<keyof CompilerOptions>()
  })
})
