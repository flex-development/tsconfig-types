/**
 * @file Unit Tests - ModuleDetection
 * @module tsconfig-types/types/tests/ModuleDetection
 */

import { ModuleDetectionKind } from '#src/enums'
import type TestSubject from '../module-detection'

describe('unit:types/ModuleDetection', () => {
  it('should allow "auto"', () => {
    assertType<TestSubject>(ModuleDetectionKind.Auto)
  })

  it('should allow "force"', () => {
    assertType<TestSubject>(ModuleDetectionKind.Force)
  })

  it('should allow "legacy"', () => {
    assertType<TestSubject>(ModuleDetectionKind.Legacy)
  })
})
