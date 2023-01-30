/**
 * @file Unit Tests - JsxEmit
 * @module tsconfig-types/enums/tests/JsxEmit
 */

import type { Jsx } from '#src/types'
import type TestSubject from '../jsx-emit'

describe('unit:enums/JsxEmit', () => {
  it('should have members match Lowercase<Jsx>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<Jsx>>()
  })

  it('should match [Preserve = "preserve"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Preserve')
      .toMatchTypeOf<'preserve'>()
  })

  it('should match [React = "react"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('React')
      .toMatchTypeOf<'react'>()
  })

  it('should match [ReactJSX = "react-jsx"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ReactJSX')
      .toMatchTypeOf<'react-jsx'>()
  })

  it('should match [ReactJSXDev = "react-jsxdev"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ReactJSXDev')
      .toMatchTypeOf<'react-jsxdev'>()
  })

  it('should match [ReactNative = "react-native"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ReactNative')
      .toMatchTypeOf<'react-native'>()
  })
})
