/**
 * @file Unit Tests - Module
 * @module tsconfig-types/types/tests/Module
 */

import { ModuleKind } from '#src/enums'
import type TestSubject from '../module'

describe('unit:types/Module', () => {
  it('should allow "AMD"', () => {
    assertType<TestSubject>('AMD')
  })

  it('should allow "CommonJS"', () => {
    assertType<TestSubject>('CommonJS')
  })

  it('should allow "ES6"', () => {
    assertType<TestSubject>('ES6')
  })

  it('should allow "ES2015"', () => {
    assertType<TestSubject>('ES2015')
  })

  it('should allow "ES2020"', () => {
    assertType<TestSubject>('ES2020')
  })

  it('should allow "ES2022"', () => {
    assertType<TestSubject>('ES2022')
  })

  it('should allow "ESNext"', () => {
    assertType<TestSubject>('ESNext')
  })

  it('should allow "Node16"', () => {
    assertType<TestSubject>('Node16')
  })

  it('should allow "NodeNext"', () => {
    assertType<TestSubject>('NodeNext')
  })

  it('should allow "None"', () => {
    assertType<TestSubject>('None')
  })

  it('should allow "System"', () => {
    assertType<TestSubject>('System')
  })

  it('should allow "UMD"', () => {
    assertType<TestSubject>('UMD')
  })

  describe('lowercase', () => {
    it('should allow "amd"', () => {
      assertType<TestSubject>(ModuleKind.AMD)
    })

    it('should allow "commonjs"', () => {
      assertType<TestSubject>(ModuleKind.CommonJS)
    })

    it('should allow "es6"', () => {
      assertType<TestSubject>(ModuleKind.ES6)
    })

    it('should allow "es2015"', () => {
      assertType<TestSubject>(ModuleKind.ES2015)
    })

    it('should allow "es2020"', () => {
      assertType<TestSubject>(ModuleKind.ES2020)
    })

    it('should allow "es2022"', () => {
      assertType<TestSubject>(ModuleKind.ES2022)
    })

    it('should allow "esnext"', () => {
      assertType<TestSubject>(ModuleKind.ESNext)
    })

    it('should allow "node16"', () => {
      assertType<TestSubject>(ModuleKind.Node16)
    })

    it('should allow "nodenext"', () => {
      assertType<TestSubject>(ModuleKind.NodeNext)
    })

    it('should allow "none"', () => {
      assertType<TestSubject>(ModuleKind.None)
    })

    it('should allow "system"', () => {
      assertType<TestSubject>(ModuleKind.System)
    })

    it('should allow "umd"', () => {
      assertType<TestSubject>(ModuleKind.UMD)
    })
  })
})
