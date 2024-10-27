/**
 * @file Type Tests - CompilerOptionsValue
 * @module tsconfig-types/tests/unit-d/CompilerOptionsValue
 */

import type TestSubject from '#lib/compiler-options-value'
import type {
  JsonPrimitive,
  JsonValue,
  MapLike,
  Plugin,
  ProjectReference
} from '@flex-development/tsconfig-types'

describe('unit-d:CompilerOptionsValue', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract (number | string)[]', () => {
    expectTypeOf<TestSubject>().extract<(number | string)[]>().not.toBeNever()
  })

  it('should extract JsonPrimitive', () => {
    expectTypeOf<TestSubject>().extract<JsonPrimitive>().not.toBeNever()
  })

  it('should extract MapLike<string[]>', () => {
    expectTypeOf<TestSubject>().extract<MapLike<string[]>>().not.toBeNever()
  })

  it('should extract Plugin[]', () => {
    expectTypeOf<TestSubject>().extract<Plugin[]>().not.toBeNever()
  })

  it('should extract ProjectReference[]', () => {
    expectTypeOf<TestSubject>().extract<ProjectReference[]>().not.toBeNever()
  })

  it('should extract string[]', () => {
    expectTypeOf<TestSubject>().extract<string[]>().not.toBeNever()
  })
})
