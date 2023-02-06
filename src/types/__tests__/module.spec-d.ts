/**
 * @file Type Tests - Module
 * @module tsconfig-types/types/tests/Module
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../module'

describe('unit:types/Module', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"AMD">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'AMD'>>().toBeString()
  })

  it('should extract OrLowercase<"CommonJS">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'CommonJS'>>().toBeString()
  })

  it('should extract OrLowercase<"ES6">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES6'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2015">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2015'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2020">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2020'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2022">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2022'>>().toBeString()
  })

  it('should extract OrLowercase<"ESNext">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ESNext'>>().toBeString()
  })

  it('should extract OrLowercase<"Node16">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'Node16'>>().toBeString()
  })

  it('should extract OrLowercase<"NodeNext">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'NodeNext'>>().toBeString()
  })

  it('should extract OrLowercase<"None">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'None'>>().toBeString()
  })

  it('should extract OrLowercase<"System">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'System'>>().toBeString()
  })

  it('should extract OrLowercase<"UMD">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'UMD'>>().toBeString()
  })
})
