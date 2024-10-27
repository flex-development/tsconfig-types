/**
 * @file Type Tests - PollingWatch
 * @module tsconfig-types/tests/unit-d/PollingWatch
 */

import type TestSubject from '#lib/polling-watch'
import type { PollingWatchMap } from '@flex-development/tsconfig-types'

describe('unit-d:PollingWatch', () => {
  it('should equal PollingWatchMap[keyof PollingWatchMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<PollingWatchMap[keyof PollingWatchMap]>()
  })
})
