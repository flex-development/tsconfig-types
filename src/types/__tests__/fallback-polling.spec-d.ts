/**
 * @file Type Tests - FallbackPolling
 * @module tsconfig-types/types/tests/FallbackPolling
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../fallback-polling'

describe('unit:types/FallbackPolling', () => {
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
})
