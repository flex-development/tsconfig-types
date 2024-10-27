/**
 * @file Type Tests - WatchDirectory
 * @module tsconfig-types/tests/unit-d/WatchDirectory
 */

import type TestSubject from '#lib/watch-directory'
import type { WatchDirectoryMap } from '@flex-development/tsconfig-types'

describe('unit-d:WatchDirectory', () => {
  it('should equal WatchDirectoryMap[keyof WatchDirectoryMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<WatchDirectoryMap[keyof WatchDirectoryMap]>()
  })
})
