/**
 * @file Unit Tests - ModuleResolution
 * @module tsconfig-types/types/tests/ModuleResolution
 */

import { ModuleResolutionKind } from '#src/enums'
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
      assertType<TestSubject>(ModuleResolutionKind.Classic)
    })

    it('should allow "node"', () => {
      assertType<TestSubject>(ModuleResolutionKind.NodeJs)
    })

    it('should allow "node16"', () => {
      assertType<TestSubject>(ModuleResolutionKind.Node16)
    })

    it('should allow "nodenext"', () => {
      assertType<TestSubject>(ModuleResolutionKind.NodeNext)
    })
  })
})
