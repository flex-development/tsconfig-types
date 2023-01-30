/**
 * @file Type Tests - WatchOptions
 * @module tsconfig-types/interfaces/tests/WatchOptions
 */

import type {
  PollingWatchKind,
  WatchDirectoryKind,
  WatchFileKind
} from '#src/enums'
import type { PollingWatch, WatchDirectory, WatchFile } from '#src/types'
import type { JsonObject } from '@flex-development/tutils'
import type TestSubject from '../watch-options'

describe('unit:interfaces/WatchOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
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
