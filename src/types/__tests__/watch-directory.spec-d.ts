/**
 * @file Type Tests - WatchDirectory
 * @module tsconfig-types/types/tests/WatchDirectory
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../watch-directory'

describe('unit:types/WatchDirectory', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"dynamicPriorityPolling">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'dynamicPriorityPolling'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"fixedChunkSizePolling">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'fixedChunkSizePolling'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"fixedPollingInterval">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'fixedPollingInterval'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"useFsEvents">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'useFsEvents'>>()
      .toBeString()
  })
})
