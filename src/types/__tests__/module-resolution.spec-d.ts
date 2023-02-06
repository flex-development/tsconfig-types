/**
 * @file Type Tests - ModuleResolution
 * @module tsconfig-types/types/tests/ModuleResolution
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../module-resolution'

describe('unit:types/ModuleResolution', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"Bundler">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'Bundler'>>().toBeString()
  })

  it('should extract OrLowercase<"Classic">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'Classic'>>().toBeString()
  })

  it('should extract OrLowercase<"Node">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'Node'>>().toBeString()
  })

  it('should extract OrLowercase<"Node10">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'Node10'>>().toBeString()
  })

  it('should extract OrLowercase<"Node16">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'Node16'>>().toBeString()
  })

  it('should extract OrLowercase<"NodeNext">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'NodeNext'>>().toBeString()
  })
})
