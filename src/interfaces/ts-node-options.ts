/**
 * @file Interfaces - TsNodeOptions
 * @module tsconfig-types/interfaces/TsNodeOptions
 */

import type { JsonObject, LiteralUnion } from '@flex-development/tutils'
import type CompilerOptions from './compiler-options'

/**
 * [`ts-node`][1] options.
 *
 * [1]: https://github.com/TypeStrong/ts-node
 *
 * @see https://typestrong.org/ts-node/docs/options
 *
 * @extends {JsonObject}
 */
interface TsNodeOptions extends JsonObject {
  /**
   * Custom TypeScript compiler.
   *
   * @default 'typescript'
   */
  compiler?: LiteralUnion<'ttypescript' | 'typescript', string>

  /**
   * Use TypeScript's compiler host API instead of the language service API.
   *
   * @default false
   */
  compilerHost?: boolean

  /**
   * TypeScript compiler options.
   *
   * @see [`CompilerOptions`]({@link ./compiler-options.ts})
   */
  compilerOptions?: CompilerOptions

  /**
   * Emit output files into `.ts-node` directory.
   *
   * @default false
   */
  emit?: boolean

  /**
   * Enable native ESM support.
   *
   * @see https://typestrong.org/ts-node/docs/imports#native-ecmascript-modules
   */
  esm?: boolean

  /**
   * Enable top level await in REPL.
   *
   * **Note**: Enabled by default when tsconfig target is `es2018` or above.
   * Setting to `true` with an incompatible target will throw an `Error`.
   */
  experimentalReplAwait?: boolean

  /**
   * Enable experimental features that re-map imports and require calls to
   * support:
   *
   * - `baseUrl`
   * - `paths`
   * - `rootDirs`
   * - `.js` to `.ts` file extension mappings,
   * - `outDir` to `rootDir` mappings for composite projects and monorepos
   *
   * @see https://github.com/TypeStrong/ts-node/issues/1514
   */
  experimentalResolver?: boolean

  /**
   * Convenience option for node's [`--experimental-specifier-resolution`][1].
   *
   * [1]: https://nodejs.org/dist/latest-v18.x/docs/api/esm.html#customizing-esm-specifier-resolution-algorithm
   */
  experimentalSpecifierResolution?: 'explicit' | 'node'

  /**
   * Allow using voluntary `.ts` file extension in import specifiers.
   *
   * **Note**: May break tooling.
   */
  experimentalTsImportSpecifiers?: boolean

  /**
   * Load `files`, `include`, and `exclude` from `tsconfig.json` on startup.
   *
   * @default false
   */
  files?: boolean

  /**
   * Paths which should not be compiled.
   *
   * Each path in the list will be converted to a regular expression (`new
   * RegExp(path)`) and tested against source paths prior to compilation.
   *
   * Source paths are normalized to posix-style separators, relative to the
   * directory containing `tsconfig.json`, or to the current working directory
   * if no `tsconfig.json` is loaded.
   *
   * @default ["(?:^|/)node_modules/"]
   */
  ignore?: string[]

  /**
   * TypeScript diagnostic codes to ignore.
   */
  ignoreDiagnostics?: (number | string)[]

  /**
   * Log TypeScript errors to `stderr` instead of throwing exceptions.
   *
   * @default false
   */
  logError?: boolean

  /**
   * Override certain paths to be compiled and executed as CommonJS or
   * ECMAScript modules.
   *
   * When overridden, the tsconfig `module` and package.json `type` fields are
   * overridden, and file extensions are ignored.
   *
   * Each key is a glob pattern following the same rules as tsconfig's `include`
   * array. When multiple patterns match the same file, the last pattern takes
   * precedence.
   *
   * - `cjs`: compile and execute as commonjs
   * - `esm`: compile and execute as native ecmascript module
   * - `package`: revert to default behavior
   */
  moduleTypes?: Record<string, 'cjs' | 'esm' | 'package'>

  /**
   * Re-order file extensions so that TypeScript imports are preferred.
   *
   * @default false
   */
  preferTsExts?: boolean

  /**
   * Use pretty diagnostic formatter.
   *
   * @default false
   */
  pretty?: boolean

  /**
   * Modules to require, like node's `--require` flag.
   *
   * If specified, modules will be resolved relative to `tsconfig.json`.
   */
  require?: string[]

  /**
   * Scope compiler to files within {@linkcode scopeDir}.
   *
   * @default false
   */
  scope?: boolean

  /**
   * Directory to limit compiler to.
   *
   * @default tsconfig.compilerOptions.rootDir || dirname(path) || process.cwd()
   */
  scopeDir?: string

  /**
   * Skip {@linkcode ignore} check, so that compilation will be attempted for
   * all files with matching extensions.
   *
   * @default false
   */
  skipIgnore?: boolean

  /**
   * Transpile with [`swc`][1] instead of the TypeScript compiler, and skip
   * type checking.
   *
   * **Note**: This is equivalent to setting {@linkcode transpileOnly} to `true`
   * and {@linkcode transpiler} to `'ts-node/transpilers/swc'`.
   *
   * [1]: https://swc.rs/
   *
   * @see https://typestrong.org/ts-node/docs/swc
   */
  swc?: boolean

  /**
   * Use TypeScript's faster `transpileModule`.
   *
   * @default false
   */
  transpileOnly?: boolean

  /**
   * Custom transpiler for use with {@linkcode transpileOnly}
   */
  transpiler?: string | [string, JsonObject]

  /**
   * Specify type checking is enabled.
   *
   * @deprecated
   * @default true
   */
  typeCheck?: boolean
}

export type { TsNodeOptions as default }
