/**
 * @file Type Tests - LibFile
 * @module tsconfig-types/tests/unit-d/LibFile
 */

import type TestSubject from '#lib/lib-file'
import type { Lib } from '@flex-development/tsconfig-types'

describe('unit-d:LibFile', () => {
  it('should equal Lowercase<`lib.${Lib}.d.ts`>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Lowercase<`lib.${Lib}.d.ts`>>()
  })
})
