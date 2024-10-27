/**
 * @file Vitest Configuration
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import pathe from '@flex-development/pathe'
import ci from 'is-ci'
import {
  defineConfig,
  type ConfigEnv,
  type UserConfig,
  type UserConfigExport
} from 'vitest/config'
import { BaseSequencer, type WorkspaceSpec } from 'vitest/node'
import tsconfigJson from './tsconfig.test.json'

/**
 * Vitest configuration.
 *
 * @const {UserConfigExport} config
 */
const config: UserConfigExport = defineConfig((env: ConfigEnv): UserConfig => {
  return {
    resolve: { conditions: tsconfigJson.compilerOptions.customConditions },
    test: {
      allowOnly: !ci,
      environment: 'node',
      include: ['**/__tests__/*.spec-d.mts'],
      outputFile: {
        blob: `.vitest-reports/${env.mode}.blob.json`,
        json: pathe.join('__tests__', 'reports', env.mode + '.json')
      },
      passWithNoTests: true,
      reporters: env.mode === 'reports'
        ? ['verbose']
        : [ci ? 'github-actions' : new Notifier(), 'blob', 'json', 'verbose'],
      sequence: {
        /**
         * Sorting and sharding algorithm provider.
         *
         * @see {@linkcode BaseSequencer}
         *
         * @extends {BaseSequencer}
         */
        sequencer: class Sequencer extends BaseSequencer {
          /**
           * Determine test file execution order.
           *
           * @public
           * @override
           * @async
           *
           * @param {WorkspaceSpec[]} specs
           *  Workspace spec objects
           * @return {Promise<WorkspaceSpec[]>}
           *  `files` sorted
           */
          public override async sort(
            specs: WorkspaceSpec[]
          ): Promise<WorkspaceSpec[]> {
            specs = await super.sort(specs)
            return specs.sort(([, f1], [, f2]) => f1.localeCompare(f2))
          }
        }
      },
      setupFiles: [],
      typecheck: {
        allowJs: false,
        checker: 'tsc',
        ignoreSourceErrors: false,
        include: ['**/__tests__/*.spec-d.mts'],
        only: true,
        tsconfig: 'tsconfig.typecheck.json'
      }
    }
  }
})

export default config
