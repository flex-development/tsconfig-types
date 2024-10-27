/**
 * @file Type Tests - Tsconfig
 * @module tsconfig-types/tests/unit-d/Tsconfig
 */

import type TestSubject from '#lib/tsconfig'
import type {
  BuildOptions,
  CompilerOptions,
  JsonObject,
  ProjectReference,
  TypeAcquisition,
  WatchOptions
} from '@flex-development/tsconfig-types'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:Tsconfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should extend JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [buildOptions?: BuildOptions | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('buildOptions')
      .toEqualTypeOf<Nilable<BuildOptions>>()
  })

  it('should match [compileOnSave?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('compileOnSave')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [compilerOptions?: CompilerOptions | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('compilerOptions')
      .toEqualTypeOf<Nilable<CompilerOptions>>()
  })

  it('should match [exclude?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exclude')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [extends?: string[] | string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extends')
      .toEqualTypeOf<Nilable<string[] | string>>()
  })

  it('should match [files?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('files')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [include?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('include')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [references?: ProjectReference[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('references')
      .toEqualTypeOf<Nilable<ProjectReference[]>>()
  })

  it('should match [typeAcquisition?: TypeAcquisition | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typeAcquisition')
      .toEqualTypeOf<Nilable<TypeAcquisition>>()
  })

  it('should match [watchOptions?: WatchOptions | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchOptions')
      .toEqualTypeOf<Nilable<WatchOptions>>()
  })
})
