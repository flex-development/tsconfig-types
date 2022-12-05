/**
 * @file Unit Tests - PollingWatchKind
 * @module tsconfig-types/enums/tests/PollingWatchKind
 */

import type { PollingWatch } from '#src/types'
import type TestSubject from '../polling-watch-kind'

describe('unit:enums/PollingWatchKind', () => {
  it('should have members match Exclude<PollingWatch, Lowercase<string>>', () => {
    expectTypeOf<typeof TestSubject[keyof typeof TestSubject]>().toMatchTypeOf<
      Exclude<PollingWatch, Lowercase<string>>
    >()
  })

  it('should match [DynamicPriority = "dynamicPriorityPolling"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DynamicPriority')
      .toMatchTypeOf<'dynamicPriorityPolling'>()
  })

  it('should match [FixedChunkSize = "fixedChunkSize"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FixedChunkSize')
      .toMatchTypeOf<'fixedChunkSize'>()
  })

  it('should match [FixedInterval = "fixedPollingInterval"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FixedInterval')
      .toMatchTypeOf<'fixedPollingInterval'>()
  })

  it('should match [PriorityInterval = "priorityPollingInterval"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PriorityInterval')
      .toMatchTypeOf<'priorityPollingInterval'>()
  })

  it('should match [SynchronousWatchDirectory = "synchronousWatchDirectory"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SynchronousWatchDirectory')
      .toMatchTypeOf<'synchronousWatchDirectory'>()
  })
})
