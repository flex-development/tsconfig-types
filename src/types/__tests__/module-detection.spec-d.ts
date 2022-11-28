/**
 * @file Unit Tests - ModuleDetection
 * @module tsconfig-types/types/tests/ModuleDetection
 */

import type TestSubject from '../module-detection'

describe('unit:types/ModuleDetection', () => {
  it('should allow "auto"', () => {
    assertType<TestSubject>('auto')
  })

  it('should allow "force"', () => {
    assertType<TestSubject>('force')
  })

  it('should allow "legacy"', () => {
    assertType<TestSubject>('legacy')
  })
})
