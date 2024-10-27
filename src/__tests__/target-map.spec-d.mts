/**
 * @file Type Tests - TargetMap
 * @module tsconfig-types/tests/unit-d/TargetMap
 */

import type TestSubject from '#lib/target-map'

describe('unit-d:TargetMap', () => {
  it('should match [es3: "es3"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es3').toEqualTypeOf<'es3'>()
  })

  it('should match [es5: "es5"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es5').toEqualTypeOf<'es5'>()
  })

  it('should match [es6: "es6"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es6').toEqualTypeOf<'es6'>()
  })

  it('should match [es2015: "es2015"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015')
      .toEqualTypeOf<'es2015'>()
  })

  it('should match [es2016: "es2016"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2016')
      .toEqualTypeOf<'es2016'>()
  })

  it('should match [es2017: "es2017"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017')
      .toEqualTypeOf<'es2017'>()
  })

  it('should match [es2018: "es2018"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018')
      .toEqualTypeOf<'es2018'>()
  })

  it('should match [es2019: "es2019"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019')
      .toEqualTypeOf<'es2019'>()
  })

  it('should match [es2020: "es2020"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020')
      .toEqualTypeOf<'es2020'>()
  })

  it('should match [es2021: "es2021"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021')
      .toEqualTypeOf<'es2021'>()
  })

  it('should match [es2022: "es2022"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022')
      .toEqualTypeOf<'es2022'>()
  })

  it('should match [es2023: "es2023"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2023')
      .toEqualTypeOf<'es2023'>()
  })

  it('should match [es2024: "es2024"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024')
      .toEqualTypeOf<'es2024'>()
  })

  it('should match [esnext: "esnext"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnext')
      .toEqualTypeOf<'esnext'>()
  })

  it('should match [json: "json"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('json').toEqualTypeOf<'json'>()
  })
})
