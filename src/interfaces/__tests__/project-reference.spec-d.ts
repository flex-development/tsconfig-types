/**
 * @file Unit Tests - ProjectReference
 * @module tsconfig-types/interfaces/interfaces/ProjectReference
 */

import { resolve } from 'node:path'
import type TestSubject from '../project-reference'

describe('unit:interfaces/ProjectReference', () => {
  let originalPath: string
  let path: string

  beforeEach(() => {
    originalPath = './packages/sdk/tsconfig.json'
    path = resolve(originalPath)
  })

  it('should allow object with all properties defined', () => {
    assertType<TestSubject>({
      circular: true,
      originalPath,
      path,
      prepend: true
    })
  })

  it('should allow object with path property only', () => {
    assertType<TestSubject>({ path })
  })
})
