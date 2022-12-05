/**
 * @file Unit Tests - ScriptTarget
 * @module tsconfig-types/enums/tests/ScriptTarget
 */

import type { Target } from '#src/types'
import type TestSubject from '../script-target'

describe('unit:enums/ScriptTarget', () => {
  it('should have members match Lowercase<Target>', () => {
    expectTypeOf<typeof TestSubject[keyof typeof TestSubject]>().toMatchTypeOf<
      Lowercase<Target>
    >()
  })

  it('should match [ES3 = "es3"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES3')
      .toMatchTypeOf<'es3'>()
  })

  it('should match [ES5 = "es5"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES5')
      .toMatchTypeOf<'es5'>()
  })

  it('should match [ES6 = "es6"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES6')
      .toMatchTypeOf<'es6'>()
  })

  it('should match [ES2015 = "es2015"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2015')
      .toMatchTypeOf<'es2015'>()
  })

  it('should match [ES2016 = "es2016"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2016')
      .toMatchTypeOf<'es2016'>()
  })

  it('should match [ES2017 = "es2017"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2017')
      .toMatchTypeOf<'es2017'>()
  })

  it('should match [ES2018 = "es2018"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2018')
      .toMatchTypeOf<'es2018'>()
  })

  it('should match [ES2019 = "es2019"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2019')
      .toMatchTypeOf<'es2019'>()
  })

  it('should match [ES2020 = "es2020"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2020')
      .toMatchTypeOf<'es2020'>()
  })

  it('should match [ES2021 = "es2021"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2021')
      .toMatchTypeOf<'es2021'>()
  })

  it('should match [ES2022 = "es2022"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2022')
      .toMatchTypeOf<'es2022'>()
  })

  it('should match [ESNext = "esnext"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ESNext')
      .toMatchTypeOf<'esnext'>()
  })
})
