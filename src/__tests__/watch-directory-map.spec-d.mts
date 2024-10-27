/**
 * @file Type Tests - WatchDirectoryMap
 * @module tsconfig-types/tests/unit-d/WatchDirectoryMap
 */

import type TestSubject from '#lib/watch-directory-map'

describe('unit-d:WatchDirectoryMap', () => {
  it('should match [dynamicPriorityPolling: "dynamicprioritypolling"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dynamicPriorityPolling')
      .toEqualTypeOf<'dynamicprioritypolling'>()
  })

  it('should match [fixedChunkSizePolling: "fixedchunksizepolling"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedChunkSizePolling')
      .toEqualTypeOf<'fixedchunksizepolling'>()
  })

  it('should match [fixedPollingInterval: "fixedpollinginterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fixedPollingInterval')
      .toEqualTypeOf<'fixedpollinginterval'>()
  })

  it('should match [useFsEvents: "usefsevents"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('useFsEvents')
      .toEqualTypeOf<'usefsevents'>()
  })
})
