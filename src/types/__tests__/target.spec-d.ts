/**
 * @file Unit Tests - Target
 * @module tsconfig-types/types/tests/Target
 */

import { ScriptTarget } from '#src/enums'
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

  it('should allow "ES2022"', () => {
    assertType<TestSubject>('ES2022')
  })

  it('should allow "ESNext"', () => {
    assertType<TestSubject>('ESNext')
  })

  describe('lowercase', () => {
    it('should allow "es3"', () => {
      assertType<TestSubject>(ScriptTarget.ES3)
    })

    it('should allow "es5"', () => {
      assertType<TestSubject>(ScriptTarget.ES5)
    })

    it('should allow "es6"', () => {
      assertType<TestSubject>(ScriptTarget.ES6)
    })

    it('should allow "es2015"', () => {
      assertType<TestSubject>(ScriptTarget.ES2015)
    })

    it('should allow "es2016"', () => {
      assertType<TestSubject>(ScriptTarget.ES2016)
    })

    it('should allow "es2017"', () => {
      assertType<TestSubject>(ScriptTarget.ES2017)
    })

    it('should allow "es2018"', () => {
      assertType<TestSubject>(ScriptTarget.ES2018)
    })

    it('should allow "es2019"', () => {
      assertType<TestSubject>(ScriptTarget.ES2019)
    })

    it('should allow "es2020"', () => {
      assertType<TestSubject>(ScriptTarget.ES2020)
    })

    it('should allow "es2021"', () => {
      assertType<TestSubject>(ScriptTarget.ES2021)
    })

    it('should allow "es2022"', () => {
      assertType<TestSubject>(ScriptTarget.ES2022)
    })

    it('should allow "esnext"', () => {
      assertType<TestSubject>(ScriptTarget.ESNext)
    })
  })
})
