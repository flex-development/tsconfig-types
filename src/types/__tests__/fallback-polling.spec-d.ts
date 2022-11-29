/**
 * @file Unit Tests - FallbackPolling
 * @module tsconfig-types/types/tests/FallbackPolling
 */

import { PollingWatchKind } from '#src/enums'
import type TestSubject from '../fallback-polling'

describe('unit:types/FallbackPolling', () => {
  it('should allow "dynamicPriorityPolling"', () => {
    assertType<TestSubject>(PollingWatchKind.DynamicPriority)
  })

  it('should allow "fixedChunkSize"', () => {
    assertType<TestSubject>(PollingWatchKind.FixedChunkSize)
  })

  it('should allow "fixedPollingInterval"', () => {
    assertType<TestSubject>(PollingWatchKind.FixedInterval)
  })

  it('should allow "priorityPollingInterval"', () => {
    assertType<TestSubject>(PollingWatchKind.PriorityInterval)
  })

  describe('lowercase', () => {
    it('should allow "dynamicpriority"', () => {
      assertType<TestSubject>('dynamicpriority')
    })

    it('should allow "fixedchunksize"', () => {
      assertType<TestSubject>('fixedchunksize')
    })

    it('should allow "fixedinterval"', () => {
      assertType<TestSubject>('fixedinterval')
    })

    it('should allow "priorityinterval"', () => {
      assertType<TestSubject>('priorityinterval')
    })
  })
})
