/**
 * @file Type Tests - WatchOptions
 * @module tsconfig-types/tests/unit-d/WatchOptions
 */

import type TestSubject from '#lib/watch-options'
import type {
  CompilerOptionsValue,
  JsonObject,
  PollingWatch,
  WatchDirectory,
  WatchFile
} from '@flex-development/tsconfig-types'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:WatchOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [[option: string]: CompilerOptionsValue]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<string>('')
      .toEqualTypeOf<CompilerOptionsValue>()
  })

  it('should match [excludeDirectories?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('excludeDirectories')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [excludeFiles?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('excludeFiles')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [fallbackPolling?: PollingWatch | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fallbackPolling')
      .toEqualTypeOf<Nilable<PollingWatch>>()
  })

  it('should match [synchronousWatchDirectory?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('synchronousWatchDirectory')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [watchDirectory?: WatchDirectory | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchDirectory')
      .toEqualTypeOf<Nilable<WatchDirectory>>()
  })

  it('should match [watchFile?: WatchFile | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchFile')
      .toEqualTypeOf<Nilable<WatchFile>>()
  })
})
