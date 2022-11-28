/**
 * @file Unit Tests - WatchDirectory
 * @module tsconfig-types/types/tests/WatchDirectory
 */

import type TestSubject from '../watch-directory'

describe('unit:types/WatchDirectory', () => {
  it('should allow "dynamicPriorityPolling"', () => {
    assertType<TestSubject>('dynamicPriorityPolling')
  })

  it('should allow "fixedChunkSizePolling"', () => {
    assertType<TestSubject>('fixedChunkSizePolling')
  })

  it('should allow "fixedPollingInterval"', () => {
    assertType<TestSubject>('fixedPollingInterval')
  })

  it('should allow "useFsEvents"', () => {
    assertType<TestSubject>('useFsEvents')
  })
})
