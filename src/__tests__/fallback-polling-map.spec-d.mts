/**
 * @file Type Tests - FallbackPollingMap
 * @module tsconfig-types/tests/unit-d/FallbackPollingMap
 */

import type TestSubject from '#lib/fallback-polling-map'

describe('unit-d:FallbackPollingMap', () => {
  it('should match [dynamicPriority: "dynamicPriority"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dynamicPriority')
      .toEqualTypeOf<'dynamicPriority'>()
  })

  it('should match [dynamicPriorityPolling: "dynamicPriorityPolling"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dynamicPriorityPolling')
      .toEqualTypeOf<'dynamicPriorityPolling'>()
  })

  it('should match [fixedChunkSize: "fixedChunkSize"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedChunkSize')
      .toEqualTypeOf<'fixedChunkSize'>()
  })

  it('should match [fixedInterval: "fixedInterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedInterval')
      .toEqualTypeOf<'fixedInterval'>()
  })

  it('should match [fixedPollingInterval: "fixedPollingInterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedPollingInterval')
      .toEqualTypeOf<'fixedPollingInterval'>()
  })

  it('should match [priorityInterval: "priorityInterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('priorityInterval')
      .toEqualTypeOf<'priorityInterval'>()
  })

  it('should match [priorityPollingInterval: "priorityPollingInterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('priorityPollingInterval')
      .toEqualTypeOf<'priorityPollingInterval'>()
  })
})
