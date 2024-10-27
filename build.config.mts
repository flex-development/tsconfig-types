/**
 * @file Configuration - Build
 * @module config/build
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import tsconfig from './tsconfig.build.json' with { type: 'json' }

/**
 * Build config.
 *
 * @type {Config}
 */
export default defineBuildConfig({
  charset: 'utf8',
  conditions: tsconfig.compilerOptions.customConditions,
  dts: 'only',
  tsconfig: 'tsconfig.build.json'
})
