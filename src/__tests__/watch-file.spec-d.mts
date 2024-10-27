/**
 * @file Type Tests - WatchFile
 * @module tsconfig-types/tests/unit-d/WatchFile
 */

import type TestSubject from '#lib/watch-file'
import type { WatchFileMap } from '@flex-development/tsconfig-types'

describe('unit-d:WatchFile', () => {
  it('should equal WatchFileMap[keyof WatchFileMap]', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<WatchFileMap[keyof WatchFileMap]>()
  })
})
