/**
 * @file Unit Tests - ModuleResolution
 * @module tsconfig-types/types/tests/ModuleResolution
 */

import type TestSubject from '../module-resolution'

describe('unit:types/ModuleResolution', () => {
  it('should allow "Classic"', () => {
    assertType<TestSubject>('Classic')
  })

  it('should allow "Node"', () => {
    assertType<TestSubject>('Node')
  })

  it('should allow "Node16"', () => {
    assertType<TestSubject>('Node16')
  })

  it('should allow "NodeNext"', () => {
    assertType<TestSubject>('NodeNext')
  })

  describe('lowercase', () => {
    it('should allow "classic"', () => {
      assertType<TestSubject>('classic')
    })

    it('should allow "node"', () => {
      assertType<TestSubject>('node')
    })

    it('should allow "node16"', () => {
      assertType<TestSubject>('node16')
    })

    it('should allow "nodenext"', () => {
      assertType<TestSubject>('nodenext')
    })
  })
})
