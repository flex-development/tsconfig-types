/**
 * @file Unit Tests - BuildOptions
 * @module tsconfig-types/types/tests/BuildOptions
 */

import type TestSubject from '../build-options'

describe('unit:types/BuildOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with all build options', () => {
    assertType<Required<TestSubject>>({
      assumeChangesOnlyAffectDirectDependencies: false,
      dry: false,
      force: false,
      incremental: false,
      traceResolution: false,
      verbose: false
    })
  })
})
