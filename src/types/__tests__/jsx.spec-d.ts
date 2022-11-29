/**
 * @file Unit Tests - Jsx
 * @module tsconfig-types/types/tests/Jsx
 */

import { JsxEmit } from '#src/enums'
import type TestSubject from '../jsx'

describe('unit:types/Jsx', () => {
  it('should allow "preserve"', () => {
    assertType<TestSubject>(JsxEmit.Preserve)
  })

  it('should allow "react-jsx"', () => {
    assertType<TestSubject>(JsxEmit.ReactJSX)
  })

  it('should allow "react-jsxdev"', () => {
    assertType<TestSubject>(JsxEmit.ReactJSXDev)
  })

  it('should allow "react-native"', () => {
    assertType<TestSubject>(JsxEmit.ReactNative)
  })

  it('should allow "react"', () => {
    assertType<TestSubject>(JsxEmit.React)
  })
})
