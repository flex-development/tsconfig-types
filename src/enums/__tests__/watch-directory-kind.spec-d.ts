/**
 * @file Unit Tests - WatchDirectoryKind
 * @module tsconfig-types/enums/tests/WatchDirectoryKind
 */

import type { WatchDirectory } from '#src/types'
import type TestSubject from '../watch-directory-kind'

describe('unit:enums/WatchDirectoryKind', () => {
  it('should have members match Lowercase<WatchDirectory>', () => {
    expectTypeOf<typeof TestSubject[keyof typeof TestSubject]>().toMatchTypeOf<
      Lowercase<WatchDirectory>
    >()
  })

  it('should match [DynamicPriorityPolling = "dynamicprioritypolling"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DynamicPriorityPolling')
      .toMatchTypeOf<'dynamicprioritypolling'>()
  })

  it('should match [FixedChunkSizePolling = "fixedchunksizepolling"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FixedChunkSizePolling')
      .toMatchTypeOf<'fixedchunksizepolling'>()
  })

  it('should match [FixedPollingInterval = "fixedpollinginterval"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FixedPollingInterval')
      .toMatchTypeOf<'fixedpollinginterval'>()
  })

  it('should match [UseFsEvents = "usefsevents"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UseFsEvents')
      .toMatchTypeOf<'usefsevents'>()
  })
})
