/**
 * @file Type Tests - PollingWatchMap
 * @module tsconfig-types/tests/unit-d/PollingWatchMap
 */

import type TestSubject from '#lib/polling-watch-map'

describe('unit-d:PollingWatchMap', () => {
  it('should match [dynamicPriority: "dynamicpriority"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dynamicPriority')
      .toEqualTypeOf<'dynamicpriority'>()
  })

  it('should match [fixedChunkSize: "fixedchunksize"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedChunkSize')
      .toEqualTypeOf<'fixedchunksize'>()
  })

  it('should match [fixedInterval: "fixedinterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedInterval')
      .toEqualTypeOf<'fixedinterval'>()
  })

  it('should match [priorityInterval: "priorityinterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('priorityInterval')
      .toEqualTypeOf<'priorityinterval'>()
  })
})
