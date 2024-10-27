/**
 * @file Type Tests - ModuleMap
 * @module tsconfig-types/tests/unit-d/ModuleMap
 */

import type TestSubject from '#lib/module-map'

describe('unit-d:ModuleMap', () => {
  it('should match [amd: "amd"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('amd').toEqualTypeOf<'amd'>()
  })

  it('should match [commonjs: "commonjs"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('commonjs')
      .toEqualTypeOf<'commonjs'>()
  })

  it('should match [es6: "es6"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es6').toEqualTypeOf<'es6'>()
  })

  it('should match [es2015: "es2015"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015')
      .toEqualTypeOf<'es2015'>()
  })

  it('should match [es2020: "es2020"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020')
      .toEqualTypeOf<'es2020'>()
  })

  it('should match [es2022: "es2022"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022')
      .toEqualTypeOf<'es2022'>()
  })

  it('should match [esnext: "esnext"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnext')
      .toEqualTypeOf<'esnext'>()
  })

  it('should match [node16: "node16"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('node16')
      .toEqualTypeOf<'node16'>()
  })

  it('should match [nodenext: "nodenext"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nodenext')
      .toEqualTypeOf<'nodenext'>()
  })

  it('should match [none: "none"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('none').toEqualTypeOf<'none'>()
  })

  it('should match [preserve: "preserve"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserve')
      .toEqualTypeOf<'preserve'>()
  })

  it('should match [system: "system"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('system')
      .toEqualTypeOf<'system'>()
  })

  it('should match [umd: "umd"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('umd').toEqualTypeOf<'umd'>()
  })
})
