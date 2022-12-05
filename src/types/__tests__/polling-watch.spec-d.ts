/**
 * @file Unit Tests - PollingWatch
 * @module tsconfig-types/types/tests/PollingWatch
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../polling-watch'

describe('unit:types/PollingWatch', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "dynamicPriorityPolling"', () => {
    expectTypeOf<TestSubject>().extract<'dynamicPriorityPolling'>().toBeString()
  })

  it('should extract "fixedChunkSize"', () => {
    expectTypeOf<TestSubject>().extract<'fixedChunkSize'>().toBeString()
  })

  it('should extract "fixedPollingInterval"', () => {
    expectTypeOf<TestSubject>().extract<'fixedPollingInterval'>().toBeString()
  })

  it('should extract "priorityPollingInterval"', () => {
    expectTypeOf<TestSubject>()
      .extract<'priorityPollingInterval'>()
      .toBeString()
  })

  it('should extract "synchronousWatchDirectory"', () => {
    expectTypeOf<TestSubject>()
      .extract<'synchronousWatchDirectory'>()
      .toBeString()
  })

  describe('lowercase', () => {
    it('should extract "dynamicpriority"', () => {
      expectTypeOf<TestSubject>().extract<'dynamicpriority'>().toBeString()
    })

    it('should extract "fixedchunksize"', () => {
      expectTypeOf<TestSubject>().extract<'fixedchunksize'>().toBeString()
    })

    it('should extract "fixedinterval"', () => {
      expectTypeOf<TestSubject>().extract<'fixedinterval'>().toBeString()
    })

    it('should extract "priorityinterval"', () => {
      expectTypeOf<TestSubject>().extract<'priorityinterval'>().toBeString()
    })
  })
})
