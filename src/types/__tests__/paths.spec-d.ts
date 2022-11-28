/**
 * @file Unit Tests - Paths
 * @module tsconfig-types/types/tests/Paths
 */

import tsconfig from '../../../tsconfig.json'
import type TestSubject from '../paths'

describe('unit:types/Paths', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with path aliases', () => {
    assertType<TestSubject>(tsconfig.compilerOptions.paths)
  })
})
