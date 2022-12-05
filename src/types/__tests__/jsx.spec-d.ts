/**
 * @file Unit Tests - Jsx
 * @module tsconfig-types/types/tests/Jsx
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../jsx'

describe('unit:types/Jsx', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "preserve"', () => {
    expectTypeOf<TestSubject>().extract<'preserve'>().toBeString()
  })

  it('should extract "react-jsx"', () => {
    expectTypeOf<TestSubject>().extract<'react-jsx'>().toBeString()
  })

  it('should extract "react-jsxdev"', () => {
    expectTypeOf<TestSubject>().extract<'react-jsxdev'>().toBeString()
  })

  it('should extract "react-native"', () => {
    expectTypeOf<TestSubject>().extract<'react-native'>().toBeString()
  })

  it('should extract "react"', () => {
    expectTypeOf<TestSubject>().extract<'react'>().toBeString()
  })
})
