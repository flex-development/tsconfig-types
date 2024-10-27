/**
 * @file Type Tests - WatchFileMap
 * @module tsconfig-types/tests/unit-d/WatchFileMap
 */

import type TestSubject from '#lib/watch-file-map'
import type { WatchDirectoryMap } from '@flex-development/tsconfig-types'

describe('unit-d:WatchFileMap', () => {
  it('should extend WatchDirectoryMap', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<WatchDirectoryMap>()
  })

  it('should match [priorityPollingInterval: "prioritypollinginterval"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('priorityPollingInterval')
      .toEqualTypeOf<'prioritypollinginterval'>()
  })

  it('should match [useFsEventsOnParentDirectory: "usefseventsonparentdirectory"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('useFsEventsOnParentDirectory')
      .toEqualTypeOf<'usefseventsonparentdirectory'>()
  })
})
