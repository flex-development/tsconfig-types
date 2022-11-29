/**
 * @file Unit Tests - WatchOptions
 * @module tsconfig-types/interfaces/interfaces/WatchOptions
 */

import { PollingWatchKind } from '#src/enums'
import type TestSubject from '../watch-options'

describe('unit:interfaces/WatchOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with all watch options', () => {
    assertType<Required<TestSubject>>({
      excludeDirectories: ['**/node_modules', '_build', 'temp/*'],
      excludeFiles: ['temp/file.ts'],
      fallbackPolling: PollingWatchKind.SynchronousWatchDirectory,
      synchronousWatchDirectory: true,
      watchDirectory: 'useFsEvents',
      watchFile: 'useFsEvents'
    })
  })

  it('should allow object with unknown key', () => {
    assertType<TestSubject>({ key: 'value' })
  })
})
