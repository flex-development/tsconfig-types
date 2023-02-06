/**
 * @file Type Tests - Target
 * @module tsconfig-types/types/tests/Target
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../target'

describe('unit:types/Target', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"ES3">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES3'>>().toBeString()
  })

  it('should extract OrLowercase<"ES5">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES5'>>().toBeString()
  })

  it('should extract OrLowercase<"ES6">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES6'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2015">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2015'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2016">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2016'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2017">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2017'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2018">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2018'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2019">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2019'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2020">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2020'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2021">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2021'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2022">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2022'>>().toBeString()
  })

  it('should extract OrLowercase<"ESNext">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ESNext'>>().toBeString()
  })
})
