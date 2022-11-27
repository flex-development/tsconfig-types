/**
 * @file Unit Tests - Jsx
 * @module tsconfig-types/types/tests/Jsx
 */

import type TestSubject from '../jsx'

describe('unit:types/Jsx', () => {
  it('should allow "preserve"', () => {
    assertType<TestSubject>('preserve')
  })

  it('should allow "react-jsx"', () => {
    assertType<TestSubject>('react-jsx')
  })

  it('should allow "react-jsxdev"', () => {
    assertType<TestSubject>('react-jsxdev')
  })

  it('should allow "react-native"', () => {
    assertType<TestSubject>('react-native')
  })

  it('should allow "react"', () => {
    assertType<TestSubject>('react')
  })
})
