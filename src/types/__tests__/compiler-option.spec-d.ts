/**
 * @file Type Tests - CompilerOption
 * @module tsconfig-types/types/tests/CompilerOption
 */

import type { CompilerOptions } from '#src/interfaces'
import type TestSubject from '../compiler-option'

describe('unit:types/CompilerOption', () => {
  it('should equal type of keyof CompilerOptions', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<keyof CompilerOptions>()
  })
})
