/**
 * @file Unit Tests - Target
 * @module tsconfig-types/types/tests/Target
 */

import type TestSubject from '../target'

describe('unit:types/Target', () => {
  it('should allow "ES3"', () => {
    assertType<TestSubject>('ES3')
  })

  it('should allow "ES5"', () => {
    assertType<TestSubject>('ES5')
  })

  it('should allow "ES6"', () => {
    assertType<TestSubject>('ES6')
  })

  it('should allow "ES2015"', () => {
    assertType<TestSubject>('ES2015')
  })

  it('should allow "ES2016"', () => {
    assertType<TestSubject>('ES2016')
  })

  it('should allow "ES2017"', () => {
    assertType<TestSubject>('ES2017')
  })

  it('should allow "ES2018"', () => {
    assertType<TestSubject>('ES2018')
  })

  it('should allow "ES2019"', () => {
    assertType<TestSubject>('ES2019')
  })

  it('should allow "ES2020"', () => {
    assertType<TestSubject>('ES2020')
  })

  it('should allow "ES2021"', () => {
    assertType<TestSubject>('ES2021')
  })

  it('should allow "ESNext"', () => {
    assertType<TestSubject>('ESNext')
  })

  describe('lowercase', () => {
    it('should allow "es3"', () => {
      assertType<TestSubject>('es3')
    })

    it('should allow "es5"', () => {
      assertType<TestSubject>('es5')
    })

    it('should allow "es6"', () => {
      assertType<TestSubject>('es6')
    })

    it('should allow "es2015"', () => {
      assertType<TestSubject>('es2015')
    })

    it('should allow "es2016"', () => {
      assertType<TestSubject>('es2016')
    })

    it('should allow "es2017"', () => {
      assertType<TestSubject>('es2017')
    })

    it('should allow "es2018"', () => {
      assertType<TestSubject>('es2018')
    })

    it('should allow "es2019"', () => {
      assertType<TestSubject>('es2019')
    })

    it('should allow "es2020"', () => {
      assertType<TestSubject>('es2020')
    })

    it('should allow "es2021"', () => {
      assertType<TestSubject>('es2021')
    })

    it('should allow "esnext"', () => {
      assertType<TestSubject>('esnext')
    })
  })
})
