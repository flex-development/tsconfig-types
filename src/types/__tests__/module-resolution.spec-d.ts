/**
 * @file Unit Tests - ModuleResolution
 * @module tsconfig-types/types/tests/ModuleResolution
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../module-resolution'

describe('unit:types/ModuleResolution', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "Classic"', () => {
    expectTypeOf<TestSubject>().extract<'Classic'>().toBeString()
  })

  it('should extract "Node"', () => {
    expectTypeOf<TestSubject>().extract<'Node'>().toBeString()
  })

  it('should extract "Node16"', () => {
    expectTypeOf<TestSubject>().extract<'Node16'>().toBeString()
  })

  it('should extract "NodeNext"', () => {
    expectTypeOf<TestSubject>().extract<'NodeNext'>().toBeString()
  })

  describe('lowercase', () => {
    it('should extract "classic"', () => {
      expectTypeOf<TestSubject>().extract<'classic'>().toBeString()
    })

    it('should extract "node"', () => {
      expectTypeOf<TestSubject>().extract<'node'>().toBeString()
    })

    it('should extract "node16"', () => {
      expectTypeOf<TestSubject>().extract<'node16'>().toBeString()
    })

    it('should extract "nodenext"', () => {
      expectTypeOf<TestSubject>().extract<'nodenext'>().toBeString()
    })
  })
})
