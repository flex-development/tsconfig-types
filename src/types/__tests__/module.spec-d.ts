/**
 * @file Unit Tests - Module
 * @module tsconfig-types/types/tests/Module
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../module'

describe('unit:types/Module', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "AMD"', () => {
    expectTypeOf<TestSubject>().extract<'AMD'>().toBeString()
  })

  it('should extract "CommonJS"', () => {
    expectTypeOf<TestSubject>().extract<'CommonJS'>().toBeString()
  })

  it('should extract "ES6"', () => {
    expectTypeOf<TestSubject>().extract<'ES6'>().toBeString()
  })

  it('should extract "ES2015"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015'>().toBeString()
  })

  it('should extract "ES2020"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020'>().toBeString()
  })

  it('should extract "ES2022"', () => {
    expectTypeOf<TestSubject>().extract<'ES2022'>().toBeString()
  })

  it('should extract "ESNext"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext'>().toBeString()
  })

  it('should extract "Node16"', () => {
    expectTypeOf<TestSubject>().extract<'Node16'>().toBeString()
  })

  it('should extract "NodeNext"', () => {
    expectTypeOf<TestSubject>().extract<'NodeNext'>().toBeString()
  })

  it('should extract "None"', () => {
    expectTypeOf<TestSubject>().extract<'None'>().toBeString()
  })

  it('should extract "System"', () => {
    expectTypeOf<TestSubject>().extract<'System'>().toBeString()
  })

  it('should extract "UMD"', () => {
    expectTypeOf<TestSubject>().extract<'UMD'>().toBeString()
  })

  describe('lowercase', () => {
    it('should extract "amd"', () => {
      assertType<TestSubject>('amd')
    })

    it('should extract "commonjs"', () => {
      assertType<TestSubject>('commonjs')
    })

    it('should extract "es6"', () => {
      assertType<TestSubject>('es6')
    })

    it('should extract "es2015"', () => {
      assertType<TestSubject>('es2015')
    })

    it('should extract "es2020"', () => {
      assertType<TestSubject>('es2020')
    })

    it('should extract "es2022"', () => {
      assertType<TestSubject>('es2022')
    })

    it('should extract "esnext"', () => {
      assertType<TestSubject>('esnext')
    })

    it('should extract "node16"', () => {
      assertType<TestSubject>('node16')
    })

    it('should extract "nodenext"', () => {
      assertType<TestSubject>('nodenext')
    })

    it('should extract "none"', () => {
      assertType<TestSubject>('none')
    })

    it('should extract "system"', () => {
      assertType<TestSubject>('system')
    })

    it('should extract "umd"', () => {
      assertType<TestSubject>('umd')
    })
  })
})
