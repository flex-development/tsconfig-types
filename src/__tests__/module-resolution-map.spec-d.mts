/**
 * @file Type Tests - ModuleResolutionMap
 * @module tsconfig-types/tests/unit-d/ModuleResolutionMap
 */

import type TestSubject from '#lib/module-resolution-map'

describe('unit-d:ModuleResolutionMap', () => {
  it('should match [bundler: "bundler"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bundler')
      .toEqualTypeOf<'bundler'>()
  })

  it('should match [classic: "classic"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('classic')
      .toEqualTypeOf<'classic'>()
  })

  it('should match [node10: "node10"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('node10')
      .toEqualTypeOf<'node10'>()
  })

  it('should match [node16: "node16"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('node16')
      .toEqualTypeOf<'node16'>()
  })

  it('should match [node: "node"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('node').toEqualTypeOf<'node'>()
  })

  it('should match [nodenext: "nodenext"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nodenext')
      .toEqualTypeOf<'nodenext'>()
  })
})
