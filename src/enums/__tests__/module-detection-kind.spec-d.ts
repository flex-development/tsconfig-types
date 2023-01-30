/**
 * @file Type Tests - ModuleDetectionKind
 * @module tsconfig-types/enums/tests/ModuleDetectionKind
 */

import type { ModuleDetection } from '#src/types'
import type TestSubject from '../module-detection-kind'

describe('unit:enums/ModuleDetectionKind', () => {
  it('should have members match Lowercase<ModuleDetection>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<ModuleDetection>>()
  })

  it('should match [Auto = "auto"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Auto')
      .toMatchTypeOf<'auto'>()
  })

  it('should match [Force = "force"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Force')
      .toMatchTypeOf<'force'>()
  })

  it('should match [Legacy = "legacy"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Legacy')
      .toMatchTypeOf<'legacy'>()
  })
})
