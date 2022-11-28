/**
 * @file Unit Tests - WatchFile
 * @module tsconfig-types/types/tests/WatchFile
 */

import type TestSubject from '../watch-file'

describe('unit:types/WatchFile', () => {
  it('should allow "dynamicPriorityPolling"', () => {
    assertType<TestSubject>('dynamicPriorityPolling')
  })

  it('should allow "fixedChunkSizePolling"', () => {
    assertType<TestSubject>('fixedChunkSizePolling')
  })

  it('should allow "fixedPollingInterval"', () => {
    assertType<TestSubject>('fixedPollingInterval')
  })

  it('should allow "priorityPollingInterval"', () => {
    assertType<TestSubject>('priorityPollingInterval')
  })

  it('should allow "useFsEvents"', () => {
    assertType<TestSubject>('useFsEvents')
  })

  it('should allow "useFsEvents"', () => {
    assertType<TestSubject>('useFsEventsOnParentDirectory')
  })
})
