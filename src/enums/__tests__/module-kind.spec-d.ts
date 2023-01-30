/**
 * @file Unit Tests - ModuleKind
 * @module tsconfig-types/enums/tests/ModuleKind
 */

import type { Module } from '#src/types'
import type TestSubject from '../module-kind'

describe('unit:enums/ModuleKind', () => {
  it('should have members match Lowercase<Module>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<Module>>()
  })

  it('should match [AMD = "amd"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('AMD')
      .toMatchTypeOf<'amd'>()
  })

  it('should match [CommonJS = "commonjs"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CommonJS')
      .toMatchTypeOf<'commonjs'>()
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

  it('should match [ES2020 = "es2020"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('ES2020')
      .toMatchTypeOf<'es2020'>()
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

  it('should match [None = "none"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('None')
      .toMatchTypeOf<'none'>()
  })

  it('should match [System = "system"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('System')
      .toMatchTypeOf<'system'>()
  })

  it('should match [UMD = "umd"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UMD')
      .toMatchTypeOf<'umd'>()
  })
})
