/**
 * @file Unit Tests - CompilerOptionsValue
 * @module tsconfig-types/types/tests/CompilerOptionsValue
 */

import path from 'node:path'
import tsconfig from '../../../tsconfig.json' assert { type: 'json' }
import type TestSubject from '../compiler-options-value'

describe('unit:types/CompilerOptionsValue', () => {
  it('should allow (number | string)[]', () => {
    assertType<TestSubject>([1, '1', 2, '3', 5, '8', 13])
  })

  it('should allow MapLike<string[]>', () => {
    assertType<TestSubject>(tsconfig.compilerOptions.paths)
  })

  it('should allow Plugin[]', () => {
    assertType<TestSubject>([{ name: 'plugin-name' }])
  })

  it('should allow ProjectReference[]', () => {
    assertType<TestSubject>([
      {
        originalPath: 'packages/ui',
        path: path.resolve('packages/ui')
      }
    ])
  })

  it('should allow boolean', () => {
    assertType<TestSubject>(tsconfig.compilerOptions.allowUnreachableCode)
    assertType<TestSubject>(tsconfig.compilerOptions.pretty)
  })

  it('should allow number', () => {
    assertType<TestSubject>(0)
  })

  it('should allow number[]', () => {
    assertType<TestSubject>([1, 1, 2, 3, 5, 8, 13])
  })

  it('should allow string', () => {
    assertType<TestSubject>(tsconfig.compilerOptions.rootDir)
  })

  it('should allow string[]', () => {
    assertType<TestSubject>(tsconfig.compilerOptions.lib)
  })

  it('should allow null', () => {
    assertType<TestSubject>(null)
  })

  it('should allow undefined', () => {
    assertType<TestSubject>(undefined)
  })
})
