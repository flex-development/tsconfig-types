/**
 * @file Type Tests - Target
 * @module tsconfig-types/types/tests/Target
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../target'

describe('unit:types/Target', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "ES3"', () => {
    expectTypeOf<TestSubject>().extract<'ES3'>().toBeString()
  })

  it('should extract "ES5"', () => {
    expectTypeOf<TestSubject>().extract<'ES5'>().toBeString()
  })

  it('should extract "ES6"', () => {
    expectTypeOf<TestSubject>().extract<'ES6'>().toBeString()
  })

  it('should extract "ES2015"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015'>().toBeString()
  })

  it('should extract "ES2016"', () => {
    expectTypeOf<TestSubject>().extract<'ES2016'>().toBeString()
  })

  it('should extract "ES2017"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017'>().toBeString()
  })

  it('should extract "ES2018"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018'>().toBeString()
  })

  it('should extract "ES2019"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019'>().toBeString()
  })

  it('should extract "ES2020"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020'>().toBeString()
  })

  it('should extract "ES2021"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021'>().toBeString()
  })

  it('should extract "ES2022"', () => {
    expectTypeOf<TestSubject>().extract<'ES2022'>().toBeString()
  })

  it('should extract "ESNext"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext'>().toBeString()
  })

  describe('lowercase', () => {
    it('should extract "es3"', () => {
      expectTypeOf<TestSubject>().extract<'es3'>().toBeString()
    })

    it('should extract "es5"', () => {
      expectTypeOf<TestSubject>().extract<'es5'>().toBeString()
    })

    it('should extract "es6"', () => {
      expectTypeOf<TestSubject>().extract<'es6'>().toBeString()
    })

    it('should extract "es2015"', () => {
      expectTypeOf<TestSubject>().extract<'es2015'>().toBeString()
    })

    it('should extract "es2016"', () => {
      expectTypeOf<TestSubject>().extract<'es2016'>().toBeString()
    })

    it('should extract "es2017"', () => {
      expectTypeOf<TestSubject>().extract<'es2017'>().toBeString()
    })

    it('should extract "es2018"', () => {
      expectTypeOf<TestSubject>().extract<'es2018'>().toBeString()
    })

    it('should extract "es2019"', () => {
      expectTypeOf<TestSubject>().extract<'es2019'>().toBeString()
    })

    it('should extract "es2020"', () => {
      expectTypeOf<TestSubject>().extract<'es2020'>().toBeString()
    })

    it('should extract "es2021"', () => {
      expectTypeOf<TestSubject>().extract<'es2021'>().toBeString()
    })

    it('should extract "es2022"', () => {
      expectTypeOf<TestSubject>().extract<'es2022'>().toBeString()
    })

    it('should extract "esnext"', () => {
      expectTypeOf<TestSubject>().extract<'esnext'>().toBeString()
    })
  })
})
