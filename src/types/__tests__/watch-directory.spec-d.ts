/**
 * @file Unit Tests - WatchDirectory
 * @module tsconfig-types/types/tests/WatchDirectory
 */

import { WatchDirectoryKind } from '#src/enums'
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

  describe('lowercase', () => {
    it('should allow "dynamicprioritypolling"', () => {
      assertType<TestSubject>(WatchDirectoryKind.DynamicPriorityPolling)
    })

    it('should allow "fixedchunksizepolling"', () => {
      assertType<TestSubject>(WatchDirectoryKind.FixedChunkSizePolling)
    })

    it('should allow "fixedpollinginterval"', () => {
      assertType<TestSubject>(WatchDirectoryKind.FixedPollingInterval)
    })

    it('should allow "usefsevents"', () => {
      assertType<TestSubject>(WatchDirectoryKind.UseFsEvents)
    })
  })
})
