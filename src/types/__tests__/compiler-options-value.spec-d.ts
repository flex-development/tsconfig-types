/**
 * @file Type Tests - CompilerOptionsValue
 * @module tsconfig-types/types/tests/CompilerOptionsValue
 */

import type { Plugin } from '#src/interfaces'
import type { JsonValue, MapLike } from '@flex-development/tutils'
import type ProjectReference from '../../interfaces/project-reference'
import type TestSubject from '../compiler-options-value'

describe('unit:types/CompilerOptionsValue', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract (number | string)[]', () => {
    expectTypeOf<TestSubject>().extract<(number | string)[]>().not.toBeNever()
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

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().not.toBeNever()
  })

  it('should extract number', () => {
    expectTypeOf<TestSubject>().extract<number>().not.toBeNever()
  })

  it('should extract string', () => {
    expectTypeOf<TestSubject>().extract<string>().not.toBeNever()
  })

  it('should extract string[]', () => {
    expectTypeOf<TestSubject>().extract<string[]>().not.toBeNever()
  })

  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().not.toBeNever()
  })
})
