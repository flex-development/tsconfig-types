/**
 * @file Type Tests - ModuleDetectionMap
 * @module tsconfig-types/tests/unit-d/ModuleDetectionMap
 */

import type TestSubject from '#lib/module-detection-map'

describe('unit-d:ModuleDetectionMap', () => {
  it('should match [auto: "auto"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('auto').toEqualTypeOf<'auto'>()
  })

  it('should match [force: "force"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('force').toEqualTypeOf<'force'>()
  })

  it('should match [legacy: "legacy"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('legacy')
      .toEqualTypeOf<'legacy'>()
  })
})
