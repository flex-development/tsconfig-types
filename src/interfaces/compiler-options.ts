/**
 * @file Interfaces - CompilerOptions
 * @module tsconfig-types/interfaces/CompilerOptions
 */

import type {
  ImportsNotUsedKind,
  JsxEmit,
  ModuleDetectionKind,
  ModuleKind,
  ModuleResolutionKind,
  NewLineKind,
  ScriptTarget,
  WatchDirectoryKind,
  WatchFileKind
} from '#src/enums'
import type {
  CompilerOptionsValue,
  FallbackPolling,
  ImportsNotUsedAsValues,
  Jsx,
  Lib,
  Module,
  ModuleDetection,
  ModuleResolution,
  NewLine,
  Paths,
  Target,
  WatchDirectory,
  WatchFile
} from '#src/types'
import type { ExportCondition } from '@flex-development/pkg-types'
import type { LiteralUnion } from '@flex-development/tutils'
import type Plugin from './plugin'

/**
 * TypeScript compiler options.
 *
 * @see https://www.typescriptlang.org/tsconfig#compilerOptions
 */
interface CompilerOptions {
  [option: string]: CompilerOptionsValue

  /**
   * Enable importing files with any extension, provided a declaration file is
   * present.
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#allowarbitraryextensions
   *
   * @default false
   */
  allowArbitraryExtensions?: boolean

  /**
   * Allow imports to include TypeScript file extensions.
   *
   * Requires {@linkcode moduleResolution} to be set to `bundler` and either
   * {@linkcode emitDeclarationOnly} or {@linkcode noEmit} to be set.
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#allowimportingtsextensions
   *
   * @default false
   */
  allowImportingTsExtensions?: boolean

  /**
   * Allow JavaScript files to be a part of the program.
   *
   * Use {@linkcode checkJS} to get errors from these files.
   *
   * @default false
   */
  allowJs?: boolean

  /**
   * Allow default imports when a module doesn't have a default export.
   *
   * This has no impact on how files are emitted &mdash; only type checking.
   *
   * @default module === 'system' || esModuleInterop
   */
  allowSyntheticDefaultImports?: boolean

  /**
   * Allow accessing UMD globals from modules.
   *
   * @default false
   */
  allowUmdGlobalAccess?: boolean

  /**
   * Disable error reporting for unreachable code.
   */
  allowUnreachableCode?: boolean

  /**
   * Disable error reporting for unused labels.
   */
  allowUnusedLabels?: boolean

  /**
   * Ensure `'use strict'` is always emitted.
   *
   * @default strict
   */
  alwaysStrict?: boolean

  /**
   * Have recompiles in projects that use {@linkcode incremental} and `watch`
   * mode assume that changes within a file will only affect files directly
   * depending on it.
   *
   * @default false
   */
  assumeChangesOnlyAffectDirectDependencies?: boolean

  /**
   * Base directory to resolve non-relative module names.
   */
  baseUrl?: LiteralUnion<'.' | './', string>

  /**
   * Text encoding for reading files.
   *
   * @deprecated
   * @default 'utf8'
   */
  charset?: string

  /**
   * Enable error reporting in type-checked JavaScript files.
   *
   * This is the equivalent of adding `// @ts-check` to the beginning of all
   * JavaScript files included in a project.
   *
   * @default false
   */
  checkJs?: boolean

  /**
   * Enable constraints that allow a TypeScript project to be used with project
   * references.
   *
   * @default false
   */
  composite?: boolean

  /**
   * List of additional export conditions that should succeed when TypeScript
   * resolves from a `package.json` [`exports`][1] or [`imports`][2] field.
   *
   * This field is only valid under the `bundler`, `node16`, and `nodenext`
   * options for {@linkcode moduleResolution}.
   *
   * [1]: https://nodejs.org/api/packages.html#exports
   * [2]: https://nodejs.org/api/packages.html#imports
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#customconditions
   * @see https://nodejs.org/api/packages.html#conditional-exports
   * @see https://nodejs.org/api/packages.html#community-conditions-definitions
   */
  customConditions?: ExportCondition[]

  /**
   * Generate `.d.ts` files.
   *
   * @default composite
   */
  declaration?: boolean

  /**
   * Output directory for generated declaration files.
   */
  declarationDir?: string

  /**
   * Create sourcemaps for `d.ts` files.
   *
   * @default false
   */
  declarationMap?: boolean

  /**
   * Output compiler performance information after building.
   *
   * @default false
   */
  diagnostics?: boolean

  /**
   * Reduce the number of projects loaded automatically by TypeScript.
   *
   * @default false
   */
  disableReferencedProjectLoad?: boolean

  /**
   * Remove the `20mb` cap on total source code size for JavaScript files in the
   * TypeScript language server.
   *
   * @default false
   */
  disableSizeLimit?: boolean

  /**
   * Opt a project out of multi-project reference checking when editing.
   *
   * @default false
   */
  disableSolutionSearching?: boolean

  /**
   * Disable preferring source files instead of declaration files when
   * referencing composite projects.
   *
   * @default false
   */
  disableSourceOfProjectReferenceRedirect?: boolean

  /**
   * Emit more compliant, but verbose and less performant JavaScript for
   * iteration.
   *
   * @default false
   */
  downlevelIteration?: boolean

  /**
   * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
   *
   * @default false
   */
  emitBOM?: boolean

  /**
   * Only output `d.ts` files and not JavaScript files.
   *
   * @default false
   */
  emitDeclarationOnly?: boolean

  /**
   * Emit design-type metadata for decorated declarations in source files.
   */
  emitDecoratorMetadata?: boolean

  /**
   * Emit additional JavaScript to ease support for importing CommonJS modules.
   *
   * Enables {@linkcode allowSyntheticDefaultImports} for type compatibility.
   *
   * @default false
   */
  esModuleInterop?: boolean

  /**
   * Differentiate between `undefined` and not present when type checking.
   *
   * @default false
   */
  exactOptionalPropertyTypes?: boolean

  /**
   * Enable experimental support for [decorators][1].
   *
   * [1]: https://github.com/tc39/proposal-decorators
   *
   * @default false
   */
  experimentalDecorators?: boolean

  /**
   * Print files read during the compilation and why they are included.
   *
   * @default false
   */
  explainFiles?: boolean

  /**
   * Output more detailed compiler performance information after building.
   *
   * @default false
   */
  extendedDiagnostics?: boolean

  /**
   * Polling strategy to use when the system runs out of native file watchers
   * and/or doesn’t support native file watchers.
   *
   * **Note**: Only applicable when using file-system events.
   *
   * @deprecated Use `watchOptions.fallbackPolling` instead
   */
  fallbackPolling?: FallbackPolling

  /**
   * Ensure that casing is correct in imports.
   *
   * @default false
   */
  forceConsistentCasingInFileNames?: boolean

  /**
   * Emit a v8 CPU profile of the compiler run for debugging.
   *
   * @default 'profile.cpuprofile'
   */
  generateCpuProfile?: LiteralUnion<'profile.cpuprofile', string>

  /**
   * Ignore errors generated from deprecated compiler options.
   *
   * @see https://github.com/microsoft/TypeScript/issues/51000
   * @see https://github.com/microsoft/TypeScript/issues/51909
   */
  ignoreDeprecations?: '5.0'

  /**
   * Allow importing helper functions from [`tslib`][1] once per project,
   * instead of including them per-file.
   *
   * [1]: https://github.com/microsoft/tslib
   *
   * @default false
   */
  importHelpers?: boolean

  /**
   * Emit/checking behavior for imports that are only used for types.
   *
   * Deprecated in TypeScript 5.0 in favor of {@linkcode verbatimModuleSyntax}.
   *
   * @default 'remove'
   */
  importsNotUsedAsValues?: ImportsNotUsedAsValues | ImportsNotUsedKind

  /**
   * Save `.tsbuildinfo` files to allow for incremental compilation of projects.
   *
   * @default composite
   */
  incremental?: boolean

  /**
   * Include sourcemap files inside emitted JavaScript.
   *
   * @default false
   */
  inlineSourceMap?: boolean

  /**
   * Include source code in the sourcemaps inside emitted JavaScript.
   *
   * **Note**: Requires {@linkcode inlineSourceMap} to be set.
   *
   * @default false
   */
  inlineSources?: boolean

  /**
   * Ensure each file can be safely transpiled without relying on other imports.
   *
   * @default false
   */
  isolatedModules?: boolean

  /**
   * Type of JSX code to generate.
   */
  jsx?: Jsx | JsxEmit

  /**
   * JSX factory function.
   *
   * @default 'React.createElement'
   */
  jsxFactory?: LiteralUnion<'h' | 'React.createElement', string>

  /**
   * JSX Fragment reference used for fragments.
   *
   * @default 'React.Fragment'
   */
  jsxFragmentFactory?: LiteralUnion<'Fragment' | 'React.Fragment', string>

  /**
   * Module specifier used to import JSX factory functions.
   *
   * @default 'react'
   */
  jsxImportSource?: LiteralUnion<'react', string>

  /**
   * Make `keyof` only return strings instead of string, numbers or symbols.
   *
   * @default false
   */
  keyofStringsOnly?: boolean

  /**
   * Set of bundled library declaration files that describe the target runtime
   * environment.
   */
  lib?: Lib[]

  /**
   * Print the names of emitted files after a compilation.
   *
   * @default false
   */
  listEmittedFiles?: boolean

  /**
   * Print all of the files read during the compilation.
   *
   * @default false
   */
  listFiles?: boolean

  /**
   * Print the names of files that are part of the compilation.
   */
  listFilesOnly?: boolean

  /**
   * Location where the debugger should locate map files instead of generated
   * locations.
   */
  mapRoot?: string

  /**
   * Max folder depth used for checking JavaScript files from `node_modules`.
   *
   * **Note**: Only applicable with {@linkcode allowJs}.
   *
   * @default 0
   */
  maxNodeModuleJsDepth?: number

  /**
   * Module system to use when emitting JavaScript files.
   *
   * @default ['ES3','ES5'].includes(target)?'CommonJS':'ES6'
   */
  module?: Module | ModuleKind

  /**
   * Algorithm used to determine if a JavaScript file is a module.
   */
  moduleDetection?: ModuleDetection | ModuleDetectionKind

  /**
   * Algorithm used to resolve a module specifier.
   *
   * @default ['AMD','ES6','System'].includes(module)?'classic':'node'
   */
  moduleResolution?: ModuleResolution | ModuleResolutionKind

  /**
   * List of file name suffixes to search when resolving a module.
   */
  moduleSuffixes?: string[]

  /**
   * End of line sequence to be used when emitting files.
   */
  newLine?: NewLine | NewLineKind

  /**
   * Disable emitting files.
   *
   * @default false
   */
  noEmit?: boolean

  /**
   * Disable generating custom helper functions like `__extends` in compiled
   * output.
   *
   * @default false
   */
  noEmitHelpers?: boolean

  /**
   * Disable emitting files if any type checking errors are reported.
   *
   * @default false
   */
  noEmitOnError?: boolean

  /**
   * Disable truncating types in error messages.
   *
   * @default false
   */
  noErrorTruncation?: boolean

  /**
   * Enable error reporting for fallthrough cases in switch statements.
   *
   * @default false
   */
  noFallthroughCasesInSwitch?: boolean

  /**
   * Enable error reporting for expressions and declarations with an implied
   * `any` type.
   *
   * @default strict
   */
  noImplicitAny?: boolean

  /**
   * Ensure overriding members in derived classes are marked with an override
   * modifier.
   *
   * @default false
   */
  noImplicitOverride?: boolean

  /**
   * Enable error reporting for codepaths that do not explicitly return in a
   * function.
   *
   * @default false
   */
  noImplicitReturns?: boolean

  /**
   * Enable error reporting when `this` is given the type `any`.
   *
   * @default strict
   */
  noImplicitThis?: boolean

  /**
   * Do not emit `'use strict'` directives in emitted JavaScript files.
   *
   * @default false
   */
  noImplicitUseStrict?: boolean

  /**
   * Disable including any library files, including the default `lib.d.ts`.
   *
   * @default false
   */
  noLib?: boolean

  /**
   * Enforces using indexed accessors for keys declared using an indexed type.
   *
   * @default false
   */
  noPropertyAccessFromIndexSignature?: boolean

  /**
   * Prevent `import`, `require` and `<reference>` from expanding the number of
   * files TypeScript should add to a project.
   *
   * @default false
   */
  noResolve?: boolean

  /**
   * Disable strict checking of generic signatures in function types.
   *
   * @default false
   */
  noStrictGenericChecks?: boolean

  /**
   * Add `undefined` to a type when accessed using an index.
   *
   * @default false
   */
  noUncheckedIndexedAccess?: boolean

  /**
   * Enable error reporting when local variables aren't read.
   *
   * @default false
   */
  noUnusedLocals?: boolean

  /**
   * Raise an error when a function parameter isn't read.
   *
   * @default false
   */
  noUnusedParameters?: boolean

  /**
   * Path to file that bundles all outputs into one JavaScript file.
   *
   * If {@linkcode declaration} is `true`, this also designates a file that
   * bundles all `.d.ts` output.
   *
   * @deprecated Use {@linkcode outFile} instead
   */
  out?: string

  /**
   * Output folder for all emitted files.
   */
  outDir?: string

  /**
   * Path to file that bundles all outputs into one JavaScript file.
   *
   * If {@linkcode declaration} is `true`, this also designates a file that
   * bundles all `.d.ts` output.
   */
  outFile?: string

  /**
   * A set of entries that re-map imports to additional lookup locations.
   */
  paths?: Paths

  /**
   * Language service plugins to include.
   */
  plugins?: Plugin[]

  /**
   * Disable erasing `const enum` declarations in generated code.
   *
   * @default isolatedModules
   */
  preserveConstEnums?: boolean

  /**
   * Disable resolving symlinks to their realpath.
   *
   * @default false
   */
  preserveSymlinks?: boolean

  /**
   * Preserve unused imported values in the JavaScript output that would
   * otherwise be removed.
   *
   * Deprecated in TypeScript 5.0 in favor of {@linkcode verbatimModuleSyntax}.
   *
   * @default false
   */
  preserveValueImports?: boolean

  /**
   * Disable wiping the console in watch mode.
   *
   * @default false
   */
  preserveWatchOutput?: boolean

  /**
   * Enable color and formatting in TypeScript's output to make compiler errors
   * easier to read.
   *
   * @default true
   */
  pretty?: boolean

  /**
   * Object invoked for `createElement`.
   *
   * @default 'React'
   */
  reactNamespace?: LiteralUnion<'React', string>

  /**
   * Disable emitting comments.
   *
   * @default false
   */
  removeComments?: boolean

  /**
   * Enable importing `.json` files.
   *
   * @default false
   */
  resolveJsonModule?: boolean

  /**
   * Force TypeScript to consult the `package.json` [`exports`][1] field if it
   * ever reads from a package in `node_modules`.
   *
   * This field is only valid under the `bundler`, `node16`, and `nodenext`
   * options for {@linkcode moduleResolution}.
   *
   * [1]: https://nodejs.org/api/packages.html#exports
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#resolvepackagejsonexports
   *
   * @default ['bundler','node16','nodenext'].includes(moduleResolution)
   */
  resolvePackageJsonExports?: boolean

  /**
   * Force TypeScript to consult the `package.json` [`imports`][1] field if it
   * ever reads from a package in `node_modules`.
   *
   * This field is only valid under the `bundler`, `node16`, and `nodenext`
   * options for {@linkcode moduleResolution}.
   *
   * [1]: https://nodejs.org/api/packages.html#imports
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#resolvepackagejsonimports
   *
   * @default ['bundler','node16','nodenext'].includes(moduleResolution)
   */
  resolvePackageJsonImports?: boolean

  /**
   * Root project directory.
   */
  rootDir?: LiteralUnion<'.' | './', string>

  /**
   * Root directories to be used when resolving modules.
   */
  rootDirs?: string[]

  /**
   * Skip type checking `.d.ts` files that are included with TypeScript.
   *
   * @deprecated Use {@linkcode skipLibCheck} instead
   * @default false
   */
  skipDefaultLibCheck?: boolean

  /**
   * Skip type checking all `.d.ts` files.
   *
   * @default false
   */
  skipLibCheck?: boolean

  /**
   * Create source map files for emitted JavaScript files.
   *
   * @default false
   */
  sourceMap?: boolean

  /**
   * Root path for debuggers to find referenced source code.
   */
  sourceRoot?: string

  /**
   * Enable all strict type-checking options.
   *
   * @default false
   */
  strict?: boolean

  /**
   * Check that the arguments for `bind`, `call`, and `apply` methods match the
   * original function.
   *
   * @default strict
   */
  strictBindCallApply?: boolean

  /**
   * Check to ensure parameters and the return values are subtype-compatible
   * when assigning functions.
   *
   * @default strict
   */
  strictFunctionTypes?: boolean

  /**
   * Respect `null` and `undefined` when type checking.
   *
   * @default strict
   */
  strictNullChecks?: boolean

  /**
   * Check for class properties that are declared but not set in the class'
   * constructor.
   *
   * @default strict
   */
  strictPropertyInitialization?: boolean

  /**
   * Disable emitting declarations that have `@internal` in their JSDoc
   * comments.
   *
   * @default false
   */
  stripInternal?: boolean

  /**
   * Disable reporting of excess property errors during the creation of object
   * literals.
   *
   * @default false
   */
  suppressExcessPropertyErrors?: boolean

  /**
   * Suppress {@linkcode noImplicitAny} errors when indexing objects that lack
   * index signatures.
   *
   * @default false
   */
  suppressImplicitAnyIndexErrors?: boolean

  /**
   * Set the JavaScript language version for emitted JavaScript and include
   * compatible library declarations.
   *
   * @default 'ES3'
   */
  target?: ScriptTarget | Target

  /**
   * Log paths used during the {@linkcode moduleResolution} process.
   *
   * @default false
   */
  traceResolution?: boolean

  /**
   * File to store incremental compilation information.
   *
   * @default '.tsbuildinfo'
   */
  tsBuildInfoFile?: LiteralUnion<'.tsbuildinfo', string>

  /**
   * Folders that act like `./node_modules/@types`.
   */
  typeRoots?: string[]

  /**
   * Declaration files to be included in compilation.
   */
  types?: string[]

  /**
   * Emit ECMAScript-standard-compliant class fields.
   *
   * @default target >= `ES2022` || target == 'ESNext'
   */
  useDefineForClassFields?: boolean

  /**
   * Default catch clause variables to `unknown` instead of `any`.
   *
   * @default strict
   */
  useUnknownInCatchVariables?: boolean

  /**
   * Do not transform or elide any imports or exports not marked as type-only,
   * ensuring they are written in the output file's format based on the
   * {@linkcode module} setting.
   *
   * **Note**: Replaces {@linkcode importsNotUsedAsValues} and
   * {@linkcode preserveValueImports}.
   *
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#verbatimmodulesyntax
   *
   * @default false
   */
  verbatimModuleSyntax?: boolean

  /**
   * Watch input files.
   *
   * @deprecated Use `watchOptions.watch` instead
   * @default false
   */
  watch?: boolean

  /**
   * Strategy for watching directories under systems that lack recursive
   * file-watching functionality.
   *
   * @deprecated Use `watchOptions.watchDirectory` instead
   * @default 'useFsEvents'
   */
  watchDirectory?: WatchDirectory | WatchDirectoryKind

  /**
   * Strategy for watching individual files.
   *
   * @deprecated Use `watchOptions.watchFile` instead
   * @default 'useFsEvents'
   */
  watchFile?: WatchFile | WatchFileKind
}

export type { CompilerOptions as default }
