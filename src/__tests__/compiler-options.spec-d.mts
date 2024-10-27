/**
 * @file Type Tests - CompilerOptions
 * @module tsconfig-types/tests/unit-d/CompilerOptions
 */

import type TestSubject from '#lib/compiler-options'
import type { Condition } from '@flex-development/pkg-types'
import type {
  CompilerOptionsValue,
  FallbackPolling,
  ImportsNotUsedAsValues,
  JsonObject,
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
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:CompilerOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be JsonObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [[option: string]: CompilerOptionsValue]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty<string>('')
      .toEqualTypeOf<CompilerOptionsValue>()
  })

  it('should match [allowArbitraryExtensions?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowArbitraryExtensions')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [allowImportingTsExtensions?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowImportingTsExtensions')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [allowJs?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowJs')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [allowSyntheticDefaultImports?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowSyntheticDefaultImports')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [allowUmdGlobalAccess?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowUmdGlobalAccess')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [allowUnreachableCode?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowUnreachableCode')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [allowUnusedLabels?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowUnusedLabels')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [alwaysStrict?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('alwaysStrict')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [assumeChangesOnlyAffectDirectDependencies?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('assumeChangesOnlyAffectDirectDependencies')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [baseUrl?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('baseUrl')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [charset?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('charset')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [checkJs?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('checkJs')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [composite?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('composite')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [customConditions?: Condition[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('customConditions')
      .toEqualTypeOf<Nilable<Condition[]>>()
  })

  it('should match [declaration?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('declaration')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [declarationDir?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('declarationDir')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [declarationMap?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('declarationMap')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [diagnostics?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('diagnostics')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [disableReferencedProjectLoad?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableReferencedProjectLoad')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [disableSizeLimit?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableSizeLimit')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [disableSolutionSearching?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableSolutionSearching')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [disableSourceOfProjectReferenceRedirect?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableSourceOfProjectReferenceRedirect')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [downlevelIteration?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('downlevelIteration')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [emitBOM?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emitBOM')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [emitDeclarationOnly?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emitDeclarationOnly')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [emitDecoratorMetadata?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emitDecoratorMetadata')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [esModuleInterop?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esModuleInterop')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [exactOptionalPropertyTypes?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exactOptionalPropertyTypes')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [experimentalDecorators?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('experimentalDecorators')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [explainFiles?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('explainFiles')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [extendedDiagnostics?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extendedDiagnostics')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [fallbackPolling?: FallbackPolling | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fallbackPolling')
      .toEqualTypeOf<Nilable<FallbackPolling>>()
  })

  it('should match [forceConsistentCasingInFileNames?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('forceConsistentCasingInFileNames')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [generateCpuProfile?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('generateCpuProfile')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [generateTrace?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('generateTrace')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [ignoreDeprecations?: "5.0" | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ignoreDeprecations')
      .toEqualTypeOf<Nilable<'5.0'>>()
  })

  it('should match [importHelpers?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('importHelpers')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [importsNotUsedAsValues?: ImportsNotUsedAsValues | null', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('importsNotUsedAsValues')
      .toEqualTypeOf<Nilable<ImportsNotUsedAsValues>>()
  })

  it('should match [incremental?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('incremental')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [inlineSourceMap?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('inlineSourceMap')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [inlineSources?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('inlineSources')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [isolatedDeclarations?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isolatedDeclarations')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [isolatedModules?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isolatedModules')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [jsx?: JsxEmit | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsx')
      .toEqualTypeOf<Nilable<JsxEmit>>()
  })

  it('should match [jsxFactory?: JsxFactory | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsxFactory')
      .toEqualTypeOf<Nilable<JsxFactory>>()
  })

  it('should match [jsxFragmentFactory?: JsxFragmentFactory | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsxFragmentFactory')
      .toEqualTypeOf<Nilable<JsxFragmentFactory>>()
  })

  it('should match [jsxImportSource?: JsxImportSource | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsxImportSource')
      .toEqualTypeOf<Nilable<JsxImportSource>>()
  })

  it('should match [keyofStringsOnly?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('keyofStringsOnly')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [lib?: Lib[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('lib')
      .toEqualTypeOf<Nilable<Lib[]>>()
  })

  it('should match [listEmittedFiles?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listEmittedFiles')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [listFiles?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listFiles')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [listFilesOnly?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listFilesOnly')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [mapRoot?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mapRoot')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [maxNodeModuleJsDepth?: number | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('maxNodeModuleJsDepth')
      .toEqualTypeOf<Nilable<number>>()
  })

  it('should match [module?: Module | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('module')
      .toEqualTypeOf<Nilable<Module>>()
  })

  it('should match [moduleDetection?: ModuleDetection | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moduleDetection')
      .toEqualTypeOf<Nilable<ModuleDetection>>()
  })

  it('should match [moduleResolution?: ModuleResolution | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moduleResolution')
      .toEqualTypeOf<Nilable<ModuleResolution>>()
  })

  it('should match [moduleSuffixes?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moduleSuffixes')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [newLine?: NewLine | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('newLine')
      .toEqualTypeOf<Nilable<NewLine>>()
  })

  it('should match [noCheck?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noCheck')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noEmit?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmit')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noEmitHelpers?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmitHelpers')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noEmitOnError?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmitOnError')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noErrorTruncation?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noErrorTruncation')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noFallthroughCasesInSwitch?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noFallthroughCasesInSwitch')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noImplicitAny?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitAny')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noImplicitOverride?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitOverride')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noImplicitReturns?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitReturns')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noImplicitThis?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitThis')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noImplicitUseStrict?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitUseStrict')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noLib?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noLib')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noPropertyAccessFromIndexSignature?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noPropertyAccessFromIndexSignature')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noResolve?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noResolve')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noStrictGenericChecks?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noStrictGenericChecks')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noUncheckedIndexedAccess?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUncheckedIndexedAccess')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noUncheckedSideEffectImports?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUncheckedSideEffectImports')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noUnusedLocals?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUnusedLocals')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [noUnusedParameters?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUnusedParameters')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [out?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('out')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [outDir?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('outDir')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [outFile?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('outFile')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [paths?: Paths | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('paths')
      .toEqualTypeOf<Nilable<Paths>>()
  })

  it('should match [plugins?: Plugin[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('plugins')
      .toEqualTypeOf<Nilable<Plugin[]>>()
  })

  it('should match [preserveConstEnums?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveConstEnums')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [preserveSymlinks?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveSymlinks')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [preserveValueImports?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveValueImports')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [preserveWatchOutput?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveWatchOutput')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [pretty?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pretty')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [reactNamespace?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactNamespace')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [removeComments?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('removeComments')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [resolveJsonModule?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolveJsonModule')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [resolvePackageJsonExports?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolvePackageJsonExports')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [resolvePackageJsonImports?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolvePackageJsonImports')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [rootDir?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rootDir')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [rootDirs?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rootDirs')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [skipDefaultLibCheck?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('skipDefaultLibCheck')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [skipLibCheck?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('skipLibCheck')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [sourceMap?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sourceMap')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [sourceRoot?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sourceRoot')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [strict?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strict')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [strictBindCallApply?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictBindCallApply')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [strictBuiltinIteratorReturn?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictBuiltinIteratorReturn')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [strictFunctionTypes?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictFunctionTypes')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [strictNullChecks?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictNullChecks')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [strictPropertyInitialization?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictPropertyInitialization')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [stripInternal?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stripInternal')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [suppressExcessPropertyErrors?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('suppressExcessPropertyErrors')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [suppressImplicitAnyIndexErrors?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('suppressImplicitAnyIndexErrors')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [target?: Target | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('target')
      .toEqualTypeOf<Nilable<Target>>()
  })

  it('should match [traceResolution?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('traceResolution')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [tsBuildInfoFile?: string | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tsBuildInfoFile')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [typeRoots?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typeRoots')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [types?: string[] | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('types')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [useDefineForClassFields?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('useDefineForClassFields')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [useUnknownInCatchVariables?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('useUnknownInCatchVariables')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [verbatimModuleSyntax?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('verbatimModuleSyntax')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [watch?: boolean | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watch')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [watchDirectory?: WatchDirectory | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchDirectory')
      .toEqualTypeOf<Nilable<WatchDirectory>>()
  })

  it('should match [watchFile?: WatchFile | null]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchFile')
      .toEqualTypeOf<Nilable<WatchFile>>()
  })
})
