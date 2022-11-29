/**
 * @file Unit Tests - WatchFile
 * @module tsconfig-types/types/tests/WatchFile
 */

import { WatchFileKind } from '#src/enums'
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

  it('should allow "useFsEventsOnParentDirectory"', () => {
    assertType<TestSubject>('useFsEventsOnParentDirectory')
  })

  describe('lowercase', () => {
    it('should allow "dynamicprioritypolling"', () => {
      assertType<TestSubject>(WatchFileKind.DynamicPriorityPolling)
    })

    it('should allow "fixedchunksizepolling"', () => {
      assertType<TestSubject>(WatchFileKind.FixedChunkSizePolling)
    })

    it('should allow "fixedpollinginterval"', () => {
      assertType<TestSubject>(WatchFileKind.FixedPollingInterval)
    })

    it('should allow "usefsevents"', () => {
      assertType<TestSubject>(WatchFileKind.UseFsEvents)
    })

    it('should allow "usefseventsonparentdirectory"', () => {
      assertType<TestSubject>(WatchFileKind.UseFsEventsOnParentDirectory)
    })
  })
})
