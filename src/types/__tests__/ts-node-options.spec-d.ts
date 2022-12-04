/**
 * @file Unit Tests - TsNodeOptions
 * @module tsconfig-types/types/tests/TsNodeOptions
 */

import type { TsConfigOptions } from 'ts-node'
import type TestSubject from '../ts-node-options'

describe('unit:interfaces/TsNodeOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should match ts-node options', () => {
    assertType<Required<TsConfigOptions>>({} as Required<TestSubject>)
  })
})
