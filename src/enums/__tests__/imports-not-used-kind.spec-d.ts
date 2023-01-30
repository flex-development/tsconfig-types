/**
 * @file Type Tests - ImportsNotUsedKind
 * @module tsconfig-types/enums/tests/ImportsNotUsedKind
 */

import type { ImportsNotUsedAsValues } from '#src/types'
import type TestSubject from '../imports-not-used-kind'

describe('unit:enums/ImportsNotUsedKind', () => {
  it('should have members match Lowercase<ImportsNotUsedAsValues>', () => {
    expectTypeOf<
      (typeof TestSubject)[keyof typeof TestSubject]
    >().toMatchTypeOf<Lowercase<ImportsNotUsedAsValues>>()
  })

  it('should match [Error = "error"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Error')
      .toMatchTypeOf<'error'>()
  })

  it('should match [Preserve = "preserve"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Preserve')
      .toMatchTypeOf<'preserve'>()
  })

  it('should match [Remove = "remove"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('Remove')
      .toMatchTypeOf<'remove'>()
  })
})
