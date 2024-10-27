/**
 * @file CompilerOptions
 * @module tsconfig-types/CompilerOptions
 * @see https://github.com/SchemaStore/schemastore/blob/67741b904851789f54f98b8df194cbf8eeb89ed7/src/schemas/json/tsconfig.json#L224-L1243
 */

import type { Condition } from '@flex-development/pkg-types'
import type {
  CompilerOptionsValue,
  FallbackPolling,
  ImportsNotUsedAsValues,
  JsxEmit,
  JsxFactory,
  JsxFragmentFactory,
  JsxImportSource,
  Lib,
  Module,
  ModuleDetection,
  ModuleResolution,
  NewLine,
  Paths,
  Plugin,
  Target,
  WatchDirectory,
  WatchFile
} from '@flex-development/tsconfig-types'

/**
 * TypeScript compiler options.
 *
 * This interface can be augmented to register custom fields. Field values are
 * expected to be compatible with {@linkcode CompilerOptionsValue}.
 *
 * @see https://www.typescriptlang.org/tsconfig#compilerOptions
 */
interface CompilerOptions {
  [option: string]: CompilerOptionsValue

  /**
   * Enable importing files with any extension, provided a declaration file is
   * present.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions
   *
   * @category
   *  modules
   */
  allowArbitraryExtensions?: boolean | null

  /**
   * Allow imports to include TypeScript file extensions.
   *
   * > 👉 **Note**: Requires {@linkcode moduleResolution} to be set to `bundler`
   * > and either {@linkcode emitDeclarationOnly} or {@linkcode noEmit} to be
   * > set.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions
   *
   * @category
   *  modules
   */
  allowImportingTsExtensions?: boolean | null

  /**
   * Allow JavaScript files to be a part of the program.
   *
   * Use {@linkcode checkJS} to get errors from these files.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowJs
   *
   * @category
   *  javascript-support
   *
   * @default false
   */
  allowJs?: boolean | null

  /**
   * Allow default imports when a module doesn't have a default export.
   *
   * This has no impact on how files are emitted &mdash; only type checking.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
   *
   * @category
   *  interop-constraints
   */
  allowSyntheticDefaultImports?: boolean | null

  /**
   * Allow accessing UMD globals from modules.
   *
   * @category
   *  modules
   *
   * @default false
   */
  allowUmdGlobalAccess?: boolean | null

  /**
   * Disable reporting for unreachable code.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUnreachableCode
   *
   * @category
   *  type-checking
   */
  allowUnreachableCode?: boolean | null

  /**
   * Disable error reporting for unused labels.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUnusedLabels
   *
   * @category
   *  type-checking
   */
  allowUnusedLabels?: boolean | null

  /**
   * Ensure `'use strict'` is always emitted.
   *
   * @see https://www.typescriptlang.org/tsconfig#alwaysStrict
   *
   * @category
   *  type-checking
   */
  alwaysStrict?: boolean | null

  /**
   * Have recompiles in projects that use {@linkcode incremental} and `watch`
   * mode assume that changes within a file will only affect files directly
   * depending on it.
   *
   * @see https://www.typescriptlang.org/tsconfig#assumeChangesOnlyAffectDirectDependencies
   *
   * @category
   *  watch-options
   */
  assumeChangesOnlyAffectDirectDependencies?: boolean | null

  /**
   * The base directory to resolve non-relative module names.
   *
   * > 👉 **Note**: This feature was designed for use in conjunction with AMD
   * > module loaders in the browser, and is not recommended in any other
   * > context. As of TypeScript 4.1, `baseUrl` is no longer required to be set
   * > when using {@linkcode paths}.
   *
   * @see https://www.typescriptlang.org/tsconfig#baseUrl
   *
   * @category
   *  modules
   */
  baseUrl?: string | null

  /**
   * Text encoding for reading files.
   *
   * @see https://www.typescriptlang.org/tsconfig#charset
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated
   */
  charset?: string | null

  /**
   * Enable error reporting in type-checked JavaScript files.
   *
   * > 👉 **Note**: This is the equivalent of adding `// @ts-check` to the
   * > beginning of all JavaScript files included in a project.
   *
   * @see https://www.typescriptlang.org/tsconfig#checkJs
   *
   * @category
   *  javascript-support
   *
   * @default false
   */
  checkJs?: boolean | null

  /**
   * Enable constraints that allow a TypeScript project to be used with project
   * references.
   *
   * @see https://www.typescriptlang.org/tsconfig#composite
   *
   * @category
   *  projects
   *
   * @default true
   */
  composite?: boolean | null

  /**
   * List of additional [conditions][conditions] that should succeed when
   * TypeScript resolves from a `package.json` [`exports`][exports] or
   * [`imports`][imports] field. These conditions are added to whatever existing
   * conditions a resolver will use by default.
   *
   * [conditions]: https://nodejs.org/api/packages.html#nested-conditions
   * [exports]: https://nodejs.org/api/packages.html#exports
   * [imports]: https://nodejs.org/api/packages.html#imports
   *
   * @see https://www.typescriptlang.org/tsconfig#customConditions
   * @see {@linkcode Condition}
   *
   * @category
   *  modules
   */
  customConditions?: Condition[] | null

  /**
   * Generate `.d.ts` files.
   *
   * @see https://www.typescriptlang.org/tsconfig#declaration
   *
   * @category
   *  emit
   *
   * @default false
   */
  declaration?: boolean | null

  /**
   * Output directory for generated declaration files.
   *
   * @see https://www.typescriptlang.org/tsconfig#declarationDir
   *
   * @category
   *  emit
   */
  declarationDir?: string | null

  /**
   * Create sourcemaps for `d.ts` files.
   *
   * @see https://www.typescriptlang.org/tsconfig#declarationMap
   *
   * @category
   *  emit
   *
   * @default false
   */
  declarationMap?: boolean | null

  /**
   * Output compiler performance information after building.
   *
   * @see https://www.typescriptlang.org/tsconfig#diagnostics
   *
   * @category
   *  compiler-diagnostics
   */
  diagnostics?: boolean | null

  /**
   * Reduce the number of projects loaded automatically by TypeScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableReferencedProjectLoad
   *
   * @category
   *  projects
   */
  disableReferencedProjectLoad?: boolean | null

  /**
   * Remove the `20mb` cap on total source code size for JavaScript files in the
   * TypeScript language server.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableSizeLimit
   *
   * @category
   *  editor-support
   *
   * @default false
   */
  disableSizeLimit?: boolean | null

  /**
   * Opt a project out of multi-project reference checking when editing.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableSolutionSearching
   *
   * @category
   *  projects
   */
  disableSolutionSearching?: boolean | null

  /**
   * Disable preferring source files instead of declaration files when
   * referencing composite projects.
   *
   * @see https://www.typescriptlang.org/tsconfig#disableSourceOfProjectReferenceRedirect
   *
   * @category
   *  projects
   */
  disableSourceOfProjectReferenceRedirect?: boolean | null

  /**
   * Emit more compliant, but verbose and less performant, JavaScript for
   * iteration.
   *
   * @see https://www.typescriptlang.org/tsconfig#downlevelIteration
   *
   * @category
   *  emit
   *
   * @default false
   */
  downlevelIteration?: boolean | null

  /**
   * Prepend a UTF-8 Byte Order Mark (BOM) to output files.
   *
   * @see https://www.typescriptlang.org/tsconfig#emitBOM
   *
   * @category
   *  emit
   *
   * @default false
   */
  emitBOM?: boolean | null

  /**
   * Only output `d.ts` files and not JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#emitDeclarationOnly
   *
   * @category
   *  emit
   *
   * @default false
   */
  emitDeclarationOnly?: boolean | null

  /**
   * Emit design-type metadata for decorated declarations in source files.
   *
   * @see https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata
   *
   * @category
   *  language-and-environment
   */
  emitDecoratorMetadata?: boolean | null

  /**
   * Emit additional JavaScript to ease support for importing CommonJS modules.
   * Enables {@linkcode allowSyntheticDefaultImports} for type compatibility.
   *
   * @see https://www.typescriptlang.org/tsconfig#esModuleInterop
   *
   * @category
   *  interop-constraints
   *
   * @default false
   */
  esModuleInterop?: boolean | null

  /**
   * Differentiate between `undefined` and not present when type checking.
   *
   * @see https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  exactOptionalPropertyTypes?: boolean | null

  /**
   * Enable experimental support for [TC39 stage 2 decorators][decorators].
   *
   * [decorators]: https://github.com/tc39/proposal-decorators
   *
   * @see https://www.typescriptlang.org/tsconfig#experimentalDecorators
   *
   * @category
   *  language-and-environment
   */
  experimentalDecorators?: boolean | null

  /**
   * Print files read during the compilation and why they are included.
   *
   * @see https://www.typescriptlang.org/tsconfig/#explainFiles
   *
   * @category
   *  compiler-diagnostics
   */
  explainFiles?: boolean | null

  /**
   * Output more detailed compiler performance information after building.
   *
   * @see https://www.typescriptlang.org/tsconfig#extendedDiagnostics
   *
   * @category
   *  compiler-diagnostics
   *
   * @default false
   */
  extendedDiagnostics?: boolean | null

  /**
   * Polling strategy to use when the system runs out of native file watchers
   * and/or doesn’t support native file watchers.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-fallbackPolling
   * @see {@linkcode FallbackPolling}
   *
   * @category
   *  watch-options
   *
   * @deprecated Use `watchOptions.fallbackPolling` instead
   */
  fallbackPolling?: FallbackPolling | null

  /**
   * Ensure that casing is correct in imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames
   *
   * @category
   *  interop-constraints
   *
   * @default false
   */
  forceConsistentCasingInFileNames?: boolean | null

  /**
   * Emit a v8 CPU profile of the compiler run for debugging.
   *
   * @see https://www.typescriptlang.org/tsconfig#generateCpuProfile
   *
   * @category
   *  compiler-diagnostics
   *
   * @default 'profile.cpuprofile'
   */
  generateCpuProfile?: string | null

  /**
   * Generate an event trace and a list of types.
   *
   * @see https://www.typescriptlang.org/tsconfig#generateTrace
   *
   * @category
   *  compiler-diagnostics
   */
  generateTrace?: boolean | null

  /**
   * Ignore errors generated from deprecated compiler options.
   *
   * @see https://github.com/microsoft/TypeScript/issues/51000
   * @see https://github.com/microsoft/TypeScript/issues/51909
   *
   * @category
   *  backwards-compatibility
   */
  ignoreDeprecations?: '5.0' | null

  /**
   * Allow importing helper functions from [`tslib`][tslib] once per project,
   * instead of including them per-file.
   *
   * [tslib]: https://github.com/microsoft/tslib
   *
   * @see https://www.typescriptlang.org/tsconfig#importHelpers
   *
   * @category
   *  emit
   *
   * @default false
   */
  importHelpers?: boolean | null

  /**
   * Emit/checking behavior for imports that are only used for types.
   *
   * @see https://www.typescriptlang.org/tsconfig/#importsNotUsedAsValues
   * @see {@linkcode ImportsNotUsedAsValues}
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated Use {@linkcode verbatimModuleSyntax}
   * @default 'remove'
   */
  importsNotUsedAsValues?: ImportsNotUsedAsValues | null

  /**
   * Enable incremental compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig/#incremental
   *
   * @category
   *  projects
   */
  incremental?: boolean | null

  /**
   * Include sourcemap files inside emitted JavaScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#inlineSourceMap
   *
   * @category
   *  emit
   *
   * @default false
   */
  inlineSourceMap?: boolean | null

  /**
   * Include source code in the sourcemaps inside emitted JavaScript.
   *
   * > 👉 **Note**: Requires {@linkcode inlineSourceMap}.
   *
   * @see https://www.typescriptlang.org/tsconfig#inlineSourceMap
   *
   * @category
   *  emit
   *
   * @default false
   */
  inlineSources?: boolean | null

  /**
   * Require sufficient annotation on exports so other tools can trivially
   * generate declaration files.
   *
   * @see https://www.typescriptlang.org/tsconfig#isolatedDeclarations
   *
   * @category
   *  interop-constraints
   *
   * @default false
   */
  isolatedDeclarations?: boolean | null

  /**
   * Ensure each file can be safely transpiled without relying on other imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#isolatedModules
   *
   * @category
   *  interop-constraints
   *
   * @default false
   */
  isolatedModules?: boolean | null

  /**
   * Type of JSX code to generate.
   *
   * @see https://www.typescriptlang.org/tsconfig/#jsx
   * @see {@linkcode JsxEmit}
   *
   * @category
   *  language-and-environment
   */
  jsx?: JsxEmit | null

  /**
   * JSX factory function to use when targeting React JSX emit.
   *
   * @see https://www.typescriptlang.org/tsconfig/#jsxFactory
   * @see {@linkcode JsxFactory}
   *
   * @category
   *  language-and-environment
   *
   * @default 'React.createElement'
   */
  jsxFactory?: JsxFactory | null

  /**
   * JSX Fragment reference to use when targeting React JSX emit.
   *
   * @see https://www.typescriptlang.org/tsconfig/#jsxFragmentFactory
   * @see {@linkcode JsxFragmentFactory}
   *
   * @category
   *  language-and-environment
   *
   * @default 'React.Fragment'
   */
  jsxFragmentFactory?: JsxFragmentFactory | null

  /**
   * Module specifier used to import JSX factory functions.
   *
   * @see https://www.typescriptlang.org/tsconfig/#jsxImportSource
   * @see {@linkcode JsxImportSource}
   *
   * @category
   *  language-and-environment
   *
   * @default 'react'
   */
  jsxImportSource?: JsxImportSource | null

  /**
   * Make `keyof` only return strings instead of string, numbers or symbols.
   *
   * @see https://www.typescriptlang.org/tsconfig#keyofStringsOnly
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated
   * @default false
   */
  keyofStringsOnly?: boolean | null

  /**
   * Set of bundled library declaration files that describe the target runtime
   * environment.
   *
   * @see https://www.typescriptlang.org/tsconfig#lib
   * @see {@linkcode Lib}
   *
   * @category
   *  language-and-environment
   */
  lib?: Lib[] | null

  /**
   * Print the names of emitted files after a compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig#listEmittedFiles
   *
   * @category
   *  compiler-diagnostics
   *
   * @default false
   */
  listEmittedFiles?: boolean | null

  /**
   * Print all of the files read during the compilation.
   *
   * @see https://www.typescriptlang.org/tsconfig#listFiles
   *
   * @category
   *  compiler-diagnostics
   *
   * @default false
   */
  listFiles?: boolean | null

  /**
   * Print the names of files that are part of the compilation  and then stop
   * processing.
   *
   * @category
   *  compiler-diagnostics
   */
  listFilesOnly?: boolean | null

  /**
   * Location where the debugger should locate map files instead of generated
   * locations.
   *
   * @see https://www.typescriptlang.org/tsconfig#mapRoot
   *
   * @category
   *  emit
   */
  mapRoot?: string | null

  /**
   * Maximum folder depth used for checking JavaScript files from
   * `node_modules`.
   *
   * > 👉 **Note**: Only applicable with {@linkcode allowJs}.
   *
   * @see https://www.typescriptlang.org/tsconfig#maxNodeModuleJsDepth
   *
   * @category
   *  javascript-support
   *
   * @default 0
   */
  maxNodeModuleJsDepth?: number | null

  /**
   * Module system.
   *
   * @see https://www.typescriptlang.org/tsconfig#module
   * @see {@linkcode Module}
   *
   * @category
   *  modules
   */
  module?: Module | null

  /**
   * Strategy used to determine if a file is a module.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleDetection
   * @see {@linkcode ModuleDetection}
   *
   * @category
   *  language-and-environment
   */
  moduleDetection?: ModuleDetection | null

  /**
   * Strategy used to look up a file from a module specifier.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleResolution
   * @see {@linkcode ModuleResolution}
   *
   * @category
   *  modules
   */
  moduleResolution?: ModuleResolution | null

  /**
   * List of file name suffixes to search when resolving a module.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleSuffixes
   *
   * @category
   *  modules
   */
  moduleSuffixes?: string[] | null

  /**
   * End of line sequence to be used when emitting files.
   *
   * @see https://www.typescriptlang.org/tsconfig#newLine
   * @see {@linkcode NewLine}
   *
   * @category
   *  emit
   */
  newLine?: NewLine | null

  /**
   * Disable full type checking.
   *
   * @see https://www.typescriptlang.org/tsconfig#noCheck
   *
   * @category
   *  compiler-diagnostics
   *
   * @default false
   */
  noCheck?: boolean | null

  /**
   * Disable emitting files.
   *
   * @see https://www.typescriptlang.org/tsconfig#noEmit
   *
   * @category
   *  emit
   *
   * @default false
   */
  noEmit?: boolean | null

  /**
   * Disable generating custom helper functions like `__extends` in compiled
   * output.
   *
   * @see https://www.typescriptlang.org/tsconfig#noEmitHelpers
   *
   * @category
   *  emit
   *
   * @default false
   */
  noEmitHelpers?: boolean | null

  /**
   * Disable emitting files if any type checking errors are reported.
   *
   * @see https://www.typescriptlang.org/tsconfig#noEmitOnError
   *
   * @category
   *  emit
   *
   * @default false
   */
  noEmitOnError?: boolean | null

  /**
   * Disable truncating types in error messages.
   *
   * @see https://www.typescriptlang.org/tsconfig#noErrorTruncation
   *
   * @category
   *  output-formatting
   *
   * @default false
   */
  noErrorTruncation?: boolean | null

  /**
   * Enable error reporting for fallthrough cases in `switch` statements.
   *
   * @see https://www.typescriptlang.org/tsconfig#noFallthroughCasesInSwitch
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  noFallthroughCasesInSwitch?: boolean | null

  /**
   * Enable error reporting for expressions and declarations with an implied
   * `any` type.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitAny
   *
   * @category
   *  type-checking
   */
  noImplicitAny?: boolean | null

  /**
   * Ensure overriding members in derived classes are marked with an `override`
   * modifier.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitOverride
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  noImplicitOverride?: boolean | null

  /**
   * Enable error reporting for codepaths that do not explicitly `return` in a
   * function.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitReturns
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  noImplicitReturns?: boolean | null

  /**
   * Enable error reporting when `this` is given the type `any`.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitThis
   *
   * @category
   *  type-checking
   */
  noImplicitThis?: boolean | null

  /**
   * Disable adding `'use strict'` directives in emitted JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#noImplicitUseStrict
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated
   * @default false
   */
  noImplicitUseStrict?: boolean | null

  /**
   * Disable including any library files, including the default `lib.d.ts`.
   *
   * @see https://www.typescriptlang.org/tsconfig#noLib
   *
   * @category
   *  language-and-environment
   *
   * @default false
   */
  noLib?: boolean | null

  /**
   * Enforces using indexed accessors for keys declared using an indexed type.
   *
   * @see https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature
   *
   * @category
   *  type-checking
   */
  noPropertyAccessFromIndexSignature?: boolean | null

  /**
   * Prevent `import`, `require` and `<reference>` from expanding the number of
   * files TypeScript should add to a project.
   *
   * @see https://www.typescriptlang.org/tsconfig#noResolve
   *
   * @category
   *  modules
   *
   * @default false
   */
  noResolve?: boolean | null

  /**
   * Disable strict checking of generic signatures in function types.
   *
   * @see https://www.typescriptlang.org/tsconfig#noStrictGenericChecks
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated
   * @default false
   */
  noStrictGenericChecks?: boolean | null

  /**
   * Add `undefined` to a type when accessed using an index.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess
   *
   * @category
   *  type-checking
   */
  noUncheckedIndexedAccess?: boolean | null

  /**
   * Check side effect imports.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUncheckedSideEffectImports
   *
   * @category
   *  modules
   *
   * @default false
   */
  noUncheckedSideEffectImports?: boolean | null

  /**
   * Enable error reporting when local variables aren't read.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUnusedLocals
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  noUnusedLocals?: boolean | null

  /**
   * Raise an error when a function parameter isn't read.
   *
   * @see https://www.typescriptlang.org/tsconfig#noUnusedParameters
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  noUnusedParameters?: boolean | null

  /**
   * @see https://www.typescriptlang.org/tsconfig/#out
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated Use {@linkcode outFile} instead
   */
  out?: string | null

  /**
   * Output folder for all emitted files.
   *
   * @see https://www.typescriptlang.org/tsconfig#outDir
   *
   * @category
   *  emit
   */
  outDir?: string | null

  /**
   * File that bundles all outputs into one JavaScript file.
   *
   * If {@linkcode declaration} is `true`, this also designates a file that
   * bundles all `.d.ts` output.
   *
   * @see https://www.typescriptlang.org/tsconfig#outFile
   *
   * @category
   *  emit
   */
  outFile?: string | null

  /**
   * A set of entries that re-map imports to additional lookup locations.
   *
   * @see https://www.typescriptlang.org/tsconfig#paths
   * @see {@linkcode Paths}
   *
   * @category
   *  modules
   */
  paths?: Paths | null

  /**
   * List of language service plugins to include.
   *
   * @see https://www.typescriptlang.org/tsconfig#plugins
   * @see {@linkcode Plugin}
   *
   * @category
   *  editor-support
   */
  plugins?: Plugin[] | null

  /**
   * Disable erasing `const enum` declarations in generated code.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveConstEnums
   *
   * @category
   *  emit
   *
   * @default false
   */
  preserveConstEnums?: boolean | null

  /**
   * Disable resolving symlinks to their realpath.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveSymlinks
   *
   * @category
   *  interop-constraints
   *
   * @default false
   */
  preserveSymlinks?: boolean | null

  /**
   * Preserve unused imported values in the JavaScript output that would
   * otherwise be removed.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveValueImports
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated Use {@linkcode verbatimModuleSyntax}
   * @default false
   */
  preserveValueImports?: boolean | null

  /**
   * Disable wiping the console in watch mode.
   *
   * @see https://www.typescriptlang.org/tsconfig#preserveWatchOutput
   *
   * @category
   *  output-formatting
   */
  preserveWatchOutput?: boolean | null

  /**
   * Enable color and formatting in output to make compiler errors easier to
   * read.
   *
   * @see https://www.typescriptlang.org/tsconfig#pretty
   *
   * @category
   *  output-formatting
   *
   * @default true
   */
  pretty?: boolean | null

  /**
   * The object invoked for `createElement`. Only applies when targeting `react`
   * JSX emit.
   *
   * @see https://www.typescriptlang.org/tsconfig#reactNamespace
   *
   * @category
   *  language-and-environment
   *
   * @default 'React'
   */
  reactNamespace?: string | null

  /**
   * Disable emitting comments.
   *
   * @see https://www.typescriptlang.org/tsconfig#removeComments
   *
   * @category
   *  emit
   *
   * @default false
   */
  removeComments?: boolean | null

  /**
   * Enable importing `.json` files.
   *
   * @see https://www.typescriptlang.org/tsconfig#resolveJsonModule
   *
   * @category
   *  modules
   *
   * @default false
   */
  resolveJsonModule?: boolean | null

  /**
   * Use the `package.json` [`exports`][exports] field when resolving package
   * imports.
   *
   * > 👉 **Note**: This field is only valid under the `bundler`, `node16`, and
   * > `nodenext` options for {@linkcode moduleResolution}.
   *
   * [exports]: https://nodejs.org/api/packages.html#exports
   *
   * @see https://www.typescriptlang.org/tsconfig#resolvePackageJsonExports
   *
   * @category
   *  modules
   *
   * @default false
   */
  resolvePackageJsonExports?: boolean | null

  /**
   * Use the `package.json` [`imports`][imports] field when resolving imports.
   *
   * > 👉 **Note**: This field is only valid under the `bundler`, `node16`, and
   * > `nodenext` options for {@linkcode moduleResolution}.
   *
   * [imports]: https://nodejs.org/api/packages.html#imports
   *
   * @see https://www.typescriptlang.org/tsconfig#resolvePackageJsonImports
   *
   * @category
   *  modules
   *
   * @default false
   */
  resolvePackageJsonImports?: boolean | null

  /**
   * Root folder within source files.
   *
   * @see https://www.typescriptlang.org/tsconfig#rootDir
   *
   * @category
   *  modules
   */
  rootDir?: string | null

  /**
   * List of folders to be treated as one when resolving modules.
   *
   * @see https://www.typescriptlang.org/tsconfig#rootDirs
   *
   * @category
   *  modules
   */
  rootDirs?: string[] | null

  /**
   * Skip type checking `.d.ts` files that are included with TypeScript.
   *
   * @see https://www.typescriptlang.org/tsconfig#skipDefaultLibCheck
   *
   * @category
   *  completeness
   *
   * @default false
   */
  skipDefaultLibCheck?: boolean | null

  /**
   * Skip type checking all declaration files.
   *
   * @see https://www.typescriptlang.org/tsconfig#skipLibCheck
   *
   * @category
   *  completeness
   *
   * @default false
   */
  skipLibCheck?: boolean | null

  /**
   * Create source map files for emitted JavaScript files.
   *
   * @see https://www.typescriptlang.org/tsconfig#sourceMap
   *
   * @category
   *  emit
   *
   * @default false
   */
  sourceMap?: boolean | null

  /**
   * Root path for debuggers to find referenced source code.
   *
   * @see https://www.typescriptlang.org/tsconfig#sourceRoot
   *
   * @category
   *  emit
   */
  sourceRoot?: string | null

  /**
   * Enable all strict type-checking options.
   *
   * @see https://www.typescriptlang.org/tsconfig#strict
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  strict?: boolean | null

  /**
   * Check that the arguments for `bind`, `call`, and `apply` methods match the
   * original function.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictBindCallApply
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  strictBindCallApply?: boolean | null

  /**
   * Instantiate built-in iterators with a `TReturn` type of `undefined` instead
   * of `any`.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictBuiltinIteratorReturn
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  strictBuiltinIteratorReturn?: boolean | null

  /**
   * Check to ensure parameters and the return values are subtype-compatible
   * when assigning functions.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictFunctionTypes
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  strictFunctionTypes?: boolean | null

  /**
   * Respect `null` and `undefined` when type checking.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictNullChecks
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  strictNullChecks?: boolean | null

  /**
   * Check for class properties that are declared, but not set in the
   * constructor.
   *
   * @see https://www.typescriptlang.org/tsconfig#strictPropertyInitialization
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  strictPropertyInitialization?: boolean | null

  /**
   * Disable emitting declarations that have `@internal` in their JSDoc
   * comments.
   *
   * @see https://www.typescriptlang.org/tsconfig#stripInternal
   *
   * @category
   *  emit
   */
  stripInternal?: boolean | null

  /**
   * Disable reporting of excess property errors during the creation of object
   * literals.
   *
   * @see https://www.typescriptlang.org/tsconfig#suppressExcessPropertyErrors
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated
   * @default false
   */
  suppressExcessPropertyErrors?: boolean | null

  /**
   * Suppress {@linkcode noImplicitAny} errors when indexing objects that lack
   * index signatures.
   *
   * @see https://www.typescriptlang.org/tsconfig#suppressImplicitAnyIndexErrors
   *
   * @category
   *  backwards-compatibility
   *
   * @deprecated
   * @default false
   */
  suppressImplicitAnyIndexErrors?: boolean | null

  /**
   * Set the JavaScript language version for emitted JavaScript and include
   * compatible library declarations.
   *
   * @see https://www.typescriptlang.org/tsconfig#target
   * @see {@linkcode Target}
   *
   * @category
   *  language-and-environment
   *
   * @default 'es3'
   */
  target?: Target | null

  /**
   * Enable tracing of the name resolution process.
   *
   * @see https://www.typescriptlang.org/tsconfig/#traceResolution
   *
   * @category
   *  compiler-diagnostics
   *
   * @default false
   */
  traceResolution?: boolean | null

  /**
   * File to store incremental compilation information.
   *
   * @see https://www.typescriptlang.org/tsconfig#tsBuildInfoFile
   *
   * @category
   *  projects
   */
  tsBuildInfoFile?: string | null

  /**
   * List of folders that act like `./node_modules/@types`.
   *
   * @see https://www.typescriptlang.org/tsconfig#typeRoots
   *
   * @category
   *  modules
   */
  typeRoots?: string[] | null

  /**
   * List of type package names to be included without being referenced in a
   * source file.
   *
   * @see https://www.typescriptlang.org/tsconfig#types
   *
   * @category
   *  modules
   */
  types?: string[] | null

  /**
   * Emit ECMAScript-standard-compliant class fields.
   *
   * @see https://www.typescriptlang.org/tsconfig#useDefineForClassFields
   *
   * @category
   *  language-and-environment
   *
   * @default false
   */
  useDefineForClassFields?: boolean | null

  /**
   * Default catch clause variables to `unknown` instead of `any`.
   *
   * @see https://www.typescriptlang.org/tsconfig#useUnknownInCatchVariables
   *
   * @category
   *  type-checking
   *
   * @default false
   */
  useUnknownInCatchVariables?: boolean | null

  /**
   * Do not transform or elide any imports or exports not marked as type-only,
   * thus ensuring they are written in the output file's format based on the
   * {@linkcode module} setting.
   *
   * @see https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax
   *
   * @category
   *  interop-constraints
   */
  verbatimModuleSyntax?: boolean | null

  /**
   * Watch input files.
   *
   * @category
   *  watch-options
   *
   * @deprecated Use `watchOptions`
   */
  watch?: boolean | null

  /**
   * Strategy for watching directories under systems that lack recursive
   * file-watching functionality.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-watchDirectory
   * @see {@linkcode WatchDirectory}
   *
   * @category
   *  watch-options
   *
   * @deprecated Use `watchOptions.watchDirectory`
   * @default 'usefsevents'
   */
  watchDirectory?: WatchDirectory | null

  /**
   * Strategy for watching individual files.
   *
   * @see https://www.typescriptlang.org/tsconfig/#watch-watchFile
   * @see {@linkcode WatchFile}
   *
   * @category
   *  watch-options
   *
   * @deprecated Use `watchOptions.watchFile`
   * @default 'usefsevents'
   */
  watchFile?: WatchFile | null
}

export type { CompilerOptions as default }
