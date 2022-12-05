/**
 * @file Unit Tests - TsNodeOptions
 * @module tsconfig-types/types/tests/TsNodeOptions
 */

import type { JsonObject } from '@flex-development/tutils'
import type { TsConfigOptions } from 'ts-node'
import type TestSubject from '../ts-node-options'

describe('unit:interfaces/TsNodeOptions', () => {
  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match ts-node options', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<TsConfigOptions>()
  })
})
