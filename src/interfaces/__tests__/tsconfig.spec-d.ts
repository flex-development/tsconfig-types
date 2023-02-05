/**
 * @file Type Tests - TSConfig
 * @module tsconfig-types/interfaces/tests/TSConfig
 */

import type { JsonObject, OneOrMany } from '@flex-development/tutils'
import type BuildOptions from '../build-options'
import type CompilerOptions from '../compiler-options'
import type ProjectReference from '../project-reference'
import type TsNodeOptions from '../ts-node-options'
import type TestSubject from '../tsconfig'
import type TypeAcquisition from '../type-acquisition'
import type WatchOptions from '../watch-options'

describe('unit:interfaces/TSConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [buildOptions?: BuildOptions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('buildOptions')
      .toEqualTypeOf<BuildOptions | undefined>()
  })

  it('should match [compileOnSave?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('compileOnSave')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [compilerOptions?: CompilerOptions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('compilerOptions')
      .toEqualTypeOf<CompilerOptions | undefined>()
  })

  it('should match [exclude?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exclude')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [extends?: OneOrMany<string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extends')
      .toEqualTypeOf<OneOrMany<string> | undefined>()
  })

  it('should match [files?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('files')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [include?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('include')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [references?: ProjectReference[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('references')
      .toEqualTypeOf<ProjectReference[] | undefined>()
  })

  it('should match [ts-node?: TsNodeOptions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ts-node')
      .toEqualTypeOf<TsNodeOptions | undefined>()
  })

  it('should match [typeAcquisition?: TypeAcquisition]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typeAcquisition')
      .toEqualTypeOf<TypeAcquisition | undefined>()
  })

  it('should match [watchOptions?: WatchOptions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchOptions')
      .toEqualTypeOf<WatchOptions | undefined>()
  })
})
