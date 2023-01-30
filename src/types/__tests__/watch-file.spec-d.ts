/**
 * @file Type Tests - WatchFile
 * @module tsconfig-types/types/tests/WatchFile
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../watch-file'

describe('unit:types/WatchFile', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "dynamicPriorityPolling"', () => {
    expectTypeOf<TestSubject>().extract<'dynamicPriorityPolling'>().toBeString()
  })

  it('should extract "fixedChunkSizePolling"', () => {
    expectTypeOf<TestSubject>().extract<'fixedChunkSizePolling'>().toBeString()
  })

  it('should extract "fixedPollingInterval"', () => {
    expectTypeOf<TestSubject>().extract<'fixedPollingInterval'>().toBeString()
  })

  it('should extract "priorityPollingInterval"', () => {
    expectTypeOf<TestSubject>()
      .extract<'priorityPollingInterval'>()
      .toBeString()
  })

  it('should extract "useFsEvents"', () => {
    expectTypeOf<TestSubject>().extract<'useFsEvents'>().toBeString()
  })

  it('should extract "useFsEventsOnParentDirectory"', () => {
    expectTypeOf<TestSubject>()
      .extract<'useFsEventsOnParentDirectory'>()
      .toBeString()
  })

  describe('lowercase', () => {
    it('should extract "dynamicprioritypolling"', () => {
      expectTypeOf<TestSubject>()
        .extract<'dynamicprioritypolling'>()
        .toBeString()
    })

    it('should extract "fixedchunksizepolling"', () => {
      expectTypeOf<TestSubject>()
        .extract<'fixedchunksizepolling'>()
        .toBeString()
    })

    it('should extract "fixedpollinginterval"', () => {
      expectTypeOf<TestSubject>().extract<'fixedpollinginterval'>().toBeString()
    })

    it('should extract "usefsevents"', () => {
      expectTypeOf<TestSubject>().extract<'usefsevents'>().toBeString()
    })

    it('should extract "usefseventsonparentdirectory"', () => {
      expectTypeOf<TestSubject>()
        .extract<'usefseventsonparentdirectory'>()
        .toBeString()
    })
  })
})
