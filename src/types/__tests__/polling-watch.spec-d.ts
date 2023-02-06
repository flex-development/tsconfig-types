/**
 * @file Type Tests - PollingWatch
 * @module tsconfig-types/types/tests/PollingWatch
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../polling-watch'

describe('unit:types/PollingWatch', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"dynamicPriorityPolling">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'dynamicPriorityPolling'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"fixedChunkSize">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'fixedChunkSize'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"fixedPollingInterval">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'fixedPollingInterval'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"priorityPollingInterval">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'priorityPollingInterval'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"synchronousWatchDirectory">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'synchronousWatchDirectory'>>()
      .toBeString()
  })
})
