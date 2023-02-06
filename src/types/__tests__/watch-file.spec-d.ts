/**
 * @file Type Tests - WatchFile
 * @module tsconfig-types/types/tests/WatchFile
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../watch-file'

describe('unit:types/WatchFile', () => {
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

  it('should extract OrLowercase<"priorityPollingInterval">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'priorityPollingInterval'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"useFsEvents">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'useFsEvents'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"useFsEventsOnParentDirectory">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'useFsEventsOnParentDirectory'>>()
      .toBeString()
  })
})
