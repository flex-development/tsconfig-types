/**
 * @file Unit Tests - TSConfig
 * @module tsconfig-types/interfaces/tests/TSConfig
 */

import type {
  BuildOptions,
  ProjectReference,
  TypeAcquisition,
  WatchOptions
} from '#src/types'
import tsconfig from '../../../tsconfig.json' assert { type: 'json' }
import type TestSubject from '../tsconfig'

describe('unit:interfaces/TSConfig', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should allow object with all config options', () => {
    assertType<Required<TestSubject>>({
      buildOptions: {} as BuildOptions,
      compileOnSave: false,
      compilerOptions: { lib: ['es2020'], module: 'esnext', target: 'esnext' },
      exclude: tsconfig.exclude,
      extends: '../tsconfig.base.json',
      files: ['./typings/index.d.ts'],
      include: tsconfig.include,
      references: [] as ProjectReference[],
      'ts-node': {
        compilerOptions: {},
        esm: true,
        experimentalResolver: true,
        experimentalSpecifierResolution: 'node',
        moduleTypes: {},
        require: [],
        transpileOnly: true
      },
      typeAcquisition: {} as TypeAcquisition,
      watchOptions: {} as WatchOptions
    })
  })

  it('should allow object with unknown key', () => {
    assertType<TestSubject>({ vueCompilerOptions: {} })
  })
})
