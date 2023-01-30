/**
 * @file Type Tests - WatchFileKind
 * @module tsconfig-types/enums/tests/WatchFileKind
 */

import type { WatchFile } from '#src/types'
import type TestSubject from '../watch-file-kind'

describe('unit:enums/WatchFileKind', () => {
  it('should have members match Lowercase<WatchFile>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<WatchFile>>()
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

  it('should match [PriorityPollingInterval = "prioritypollinginterval"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PriorityPollingInterval')
      .toMatchTypeOf<'prioritypollinginterval'>()
  })

  it('should match [UseFsEvents = "usefsevents"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UseFsEvents')
      .toMatchTypeOf<'usefsevents'>()
  })

  it('should match [UseFsEventsOnParentDirectory = "usefseventsonparentdirectory"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UseFsEventsOnParentDirectory')
      .toMatchTypeOf<'usefseventsonparentdirectory'>()
  })
})
