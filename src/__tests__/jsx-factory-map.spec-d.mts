/**
 * @file Type Tests - JsxFactoryMap
 * @module tsconfig-types/tests/unit-d/JsxFactoryMap
 */

import type TestSubject from '#lib/jsx-factory-map'

describe('unit-d:JsxFactoryMap', () => {
  it('should match [h: "h"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('h').toEqualTypeOf<'h'>()
  })

  it('should match [reactCreateElement: "React.createElement"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactCreateElement')
      .toEqualTypeOf<'React.createElement'>()
  })
})
