/**
 * @file Unit Tests - WatchOptions
 * @module tsconfig-types/types/tests/WatchOptions
 */

import type {
  PollingWatchKind,
  WatchDirectoryKind,
  WatchFileKind
} from '#src/enums'
import type { JsonObject, KeysRequired } from '@flex-development/tutils'
import type PollingWatch from '../polling-watch'
import type WatchDirectory from '../watch-directory'
import type WatchFile from '../watch-file'
import type TestSubject from '../watch-options'

describe('unit:interfaces/WatchOptions', () => {
  it('should allow empty object', () => {
    expectTypeOf<KeysRequired<TestSubject>>().toBeNever()
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [excludeDirectories?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('excludeDirectories')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [excludeFiles?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('excludeFiles')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [fallbackPolling?: PollingWatch | PollingWatchKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fallbackPolling')
      .toEqualTypeOf<PollingWatch | PollingWatchKind | undefined>()
  })

  it('should match [synchronousWatchDirectory?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('synchronousWatchDirectory')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [watchDirectory?: WatchDirectory | WatchDirectoryKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchDirectory')
      .toEqualTypeOf<WatchDirectory | WatchDirectoryKind | undefined>()
  })

  it('should match [watchFile?: WatchFile | WatchFileKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchFile')
      .toEqualTypeOf<WatchFile | WatchFileKind | undefined>()
  })
})
