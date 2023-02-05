/**
 * @file Type Tests - ModuleResolutionKind
 * @module tsconfig-types/enums/tests/ModuleResolutionKind
 */

import type { ModuleResolution } from '#src/types'
import type TestSubject from '../module-resolution-kind'

describe('unit:enums/ModuleResolutionKind', () => {
  it('should have members match Lowercase<ModuleResolution>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<ModuleResolution>>()
  })

  it('should match [Bundler = "bundler"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Bundler')
      .toMatchTypeOf<'bundler'>()
  })

  it('should match [Classic = "classic"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Classic')
      .toMatchTypeOf<'classic'>()
  })

  it('should match [NodeJs = "node"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NodeJs')
      .toMatchTypeOf<'node'>()
  })

  it('should match [Node10 = "node10"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Node10')
      .toMatchTypeOf<'node10'>()
  })

  it('should match [Node16 = "node16"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Node16')
      .toMatchTypeOf<'node16'>()
  })

  it('should match [NodeNext = "nodenext"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NodeNext')
      .toMatchTypeOf<'nodenext'>()
  })
})
