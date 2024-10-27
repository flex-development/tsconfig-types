/**
 * @file Type Tests - JsxEmitMap
 * @module tsconfig-types/tests/unit-d/JsxEmitMap
 */

import type TestSubject from '#lib/jsx-emit-map'

describe('unit-d:JsxEmitMap', () => {
  it('should match [preserve: "preserve"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserve')
      .toEqualTypeOf<'preserve'>()
  })

  it('should match [react: "react"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('react').toEqualTypeOf<'react'>()
  })

  it('should match [reactJsx: "react-jsx"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactJsx')
      .toEqualTypeOf<'react-jsx'>()
  })

  it('should match [reactJsxDev: "react-jsxdev"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactJsxDev')
      .toEqualTypeOf<'react-jsxdev'>()
  })

  it('should match [reactNative: "react-native"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactNative')
      .toEqualTypeOf<'react-native'>()
  })
})
