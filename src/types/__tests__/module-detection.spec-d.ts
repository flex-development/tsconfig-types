/**
 * @file Unit Tests - ModuleDetection
 * @module tsconfig-types/types/tests/ModuleDetection
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../module-detection'

describe('unit:types/ModuleDetection', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "auto"', () => {
    expectTypeOf<TestSubject>().extract<'auto'>().toBeString()
  })

  it('should extract "force"', () => {
    expectTypeOf<TestSubject>().extract<'force'>().toBeString()
  })

  it('should extract "legacy"', () => {
    expectTypeOf<TestSubject>().extract<'legacy'>().toBeString()
  })
})
