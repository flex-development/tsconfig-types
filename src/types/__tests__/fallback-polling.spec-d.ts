/**
 * @file Unit Tests - FallbackPolling
 * @module tsconfig-types/types/tests/FallbackPolling
 */

import type TestSubject from '../fallback-polling'

describe('unit:types/FallbackPolling', () => {
  it('should allow "dynamicPriority"', () => {
    assertType<TestSubject>('dynamicPriority')
  })

  it('should allow "dynamicPriorityPolling"', () => {
    assertType<TestSubject>('dynamicPriorityPolling')
  })

  it('should allow "fixedChunkSize"', () => {
    assertType<TestSubject>('fixedChunkSize')
  })

  it('should allow "fixedInterval"', () => {
    assertType<TestSubject>('fixedInterval')
  })

  it('should allow "fixedPollingInterval"', () => {
    assertType<TestSubject>('fixedPollingInterval')
  })

  it('should allow "priorityInterval"', () => {
    assertType<TestSubject>('priorityInterval')
  })

  it('should allow "priorityPollingInterval"', () => {
    assertType<TestSubject>('priorityPollingInterval')
  })

  it('should allow "synchronousWatchDirectory"', () => {
    assertType<TestSubject>('synchronousWatchDirectory')
  })
})
