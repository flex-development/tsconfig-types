/**
 * @file Type Tests - FallbackPolling
 * @module tsconfig-types/tests/unit-d/FallbackPolling
 */

import type TestSubject from '#lib/fallback-polling'
import type { FallbackPollingMap } from '@flex-development/tsconfig-types'

describe('unit-d:FallbackPolling', () => {
  it('should equal FallbackPollingMap[keyof FallbackPollingMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<FallbackPollingMap[keyof FallbackPollingMap]>()
  })
})
