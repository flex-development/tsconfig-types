/**
 * @file Unit Tests - BuildOptions
 * @module tsconfig-types/interfaces/interfaces/BuildOptions
 */

import type TestSubject from '../build-options'

describe('unit:interfaces/BuildOptions', () => {
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

  it('should allow object with unknown key', () => {
    assertType<TestSubject>({ key: 'value' })
  })
})
