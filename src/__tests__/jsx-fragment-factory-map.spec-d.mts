/**
 * @file Type Tests - JsxFragmentFactoryMap
 * @module tsconfig-types/tests/unit-d/JsxFragmentFactoryMap
 */

import type TestSubject from '#lib/jsx-fragment-factory-map'

describe('unit-d:JsxFragmentFactoryMap', () => {
  it('should match [fragment: "Fragment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fragment')
      .toEqualTypeOf<'Fragment'>()
  })

  it('should match [reactFragment: "React.Fragment"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactFragment')
      .toEqualTypeOf<'React.Fragment'>()
  })
})
