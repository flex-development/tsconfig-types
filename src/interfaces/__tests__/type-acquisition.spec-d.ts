/**
 * @file Unit Tests - TypeAcquisition
 * @module tsconfig-types/interfaces/interfaces/TypeAcquisition
 */

import type TestSubject from '../type-acquisition'

describe('unit:interfaces/TypeAcquisition', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with all type-acquisition options', () => {
    assertType<Required<TestSubject>>({
      disableFilenameBasedTypeAcquisition: false,
      enable: true,
      enableAutoDiscovery: true,
      exclude: ['jest', 'mocha'],
      include: ['jquery']
    })
  })

  it('should allow object with unknown key', () => {
    assertType<TestSubject>({ key: 'value' })
  })
})
