/**
 * @file Type Tests - CompilerOptions
 * @module tsconfig-types/interfaces/tests/CompilerOptions
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
import type { Plugin } from '#src/interfaces'
import type {
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
import type { JsonObject, LiteralUnion } from '@flex-development/tutils'
import type TestSubject from '../compiler-options'

describe('unit:interfaces/CompilerOptions', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  it('should be json object', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonObject>()
  })

  it('should match [allowArbitraryExtensions?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowArbitraryExtensions')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [allowImportingTsExtensions?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowImportingTsExtensions')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [allowJs?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowJs')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [allowSyntheticDefaultImports?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowSyntheticDefaultImports')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [allowUmdGlobalAccess?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowUmdGlobalAccess')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [allowUnreachableCode?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowUnreachableCode')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [allowUnusedLabels?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('allowUnusedLabels')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [alwaysStrict?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('alwaysStrict')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [assumeChangesOnlyAffectDirectDependencies?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('assumeChangesOnlyAffectDirectDependencies')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [baseUrl?: LiteralUnion<"." | "./", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('baseUrl')
      .toEqualTypeOf<LiteralUnion<'.' | './', string> | undefined>()
  })

  it('should match [charset?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('charset')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [checkJs?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('checkJs')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [composite?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('composite')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [customConditions?: ExportCondition[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('customConditions')
      .toEqualTypeOf<ExportCondition[] | undefined>()
  })

  it('should match [declaration?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('declaration')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [declarationDir?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('declarationDir')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [declarationMap?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('declarationMap')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [diagnostics?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('diagnostics')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [disableReferencedProjectLoad?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableReferencedProjectLoad')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [disableSizeLimit?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableSizeLimit')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [disableSolutionSearching?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableSolutionSearching')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [disableSourceOfProjectReferenceRedirect?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('disableSourceOfProjectReferenceRedirect')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [downlevelIteration?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('downlevelIteration')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [emitBOM?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emitBOM')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [emitDeclarationOnly?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emitDeclarationOnly')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [emitDecoratorMetadata?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('emitDecoratorMetadata')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [esModuleInterop?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esModuleInterop')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [exactOptionalPropertyTypes?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('exactOptionalPropertyTypes')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [experimentalDecorators?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('experimentalDecorators')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [explainFiles?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('explainFiles')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [extendedDiagnostics?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('extendedDiagnostics')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [fallbackPolling?: FallbackPolling]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fallbackPolling')
      .toEqualTypeOf<FallbackPolling | undefined>()
  })

  it('should match [forceConsistentCasingInFileNames?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('forceConsistentCasingInFileNames')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [generateCpuProfile?: LiteralUnion<"profile.cpuprofile", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('generateCpuProfile')
      .toEqualTypeOf<LiteralUnion<'profile.cpuprofile', string> | undefined>()
  })

  it('should match [importHelpers?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('importHelpers')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [importsNotUsedAsValues?: ImportsNotUsedAsValues | ImportsNotUsedKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('importsNotUsedAsValues')
      .toEqualTypeOf<ImportsNotUsedAsValues | ImportsNotUsedKind | undefined>()
  })

  it('should match [incremental?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('incremental')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [inlineSourceMap?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('inlineSourceMap')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [inlineSources?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('inlineSources')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [isolatedModules?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('isolatedModules')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [jsx?: Jsx | JsxEmit]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsx')
      .toEqualTypeOf<Jsx | JsxEmit | undefined>()
  })

  it('should match [jsxFactory?: LiteralUnion<"h" | "React.createElement", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsxFactory')
      .toEqualTypeOf<
        LiteralUnion<'h' | 'React.createElement', string> | undefined
      >()
  })

  it('should match [jsxFragmentFactory?: LiteralUnion<"Fragment" | "React.Fragment", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsxFragmentFactory')
      .toEqualTypeOf<
        LiteralUnion<'Fragment' | 'React.Fragment', string> | undefined
      >()
  })

  it('should match [jsxImportSource?: LiteralUnion<"react", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('jsxImportSource')
      .toEqualTypeOf<LiteralUnion<'react', string> | undefined>()
  })

  it('should match [keyofStringsOnly?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('keyofStringsOnly')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [lib?: Lib[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('lib')
      .toEqualTypeOf<Lib[] | undefined>()
  })

  it('should match [listEmittedFiles?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listEmittedFiles')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [listFiles?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listFiles')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [listFilesOnly?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listFilesOnly')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [mapRoot?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mapRoot')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [maxNodeModuleJsDepth?: number]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('maxNodeModuleJsDepth')
      .toEqualTypeOf<number | undefined>()
  })

  it('should match [module?: Module | ModuleKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('module')
      .toEqualTypeOf<Module | ModuleKind | undefined>()
  })

  it('should match [moduleDetection?: ModuleDetection | ModuleDetectionKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moduleDetection')
      .toEqualTypeOf<ModuleDetection | ModuleDetectionKind | undefined>()
  })

  it('should match [moduleResolution?: ModuleResolution | ModuleResolutionKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moduleResolution')
      .toEqualTypeOf<ModuleResolution | ModuleResolutionKind | undefined>()
  })

  it('should match [moduleSuffixes?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('moduleSuffixes')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [newLine?: NewLine | NewLineKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('newLine')
      .toEqualTypeOf<NewLine | NewLineKind | undefined>()
  })

  it('should match [noEmit?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmit')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noEmitHelpers?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmitHelpers')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noEmitOnError?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noEmitOnError')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noErrorTruncation?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noErrorTruncation')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noFallthroughCasesInSwitch?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noFallthroughCasesInSwitch')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noImplicitAny?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitAny')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noImplicitOverride?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitOverride')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noImplicitReturns?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitReturns')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noImplicitThis?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitThis')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noImplicitUseStrict?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noImplicitUseStrict')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noLib?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noLib')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noPropertyAccessFromIndexSignature?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noPropertyAccessFromIndexSignature')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noResolve?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noResolve')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noStrictGenericChecks?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noStrictGenericChecks')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noUncheckedIndexedAccess?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUncheckedIndexedAccess')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noUnusedLocals?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUnusedLocals')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [noUnusedParameters?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noUnusedParameters')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [out?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('out')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [outDir?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('outDir')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [outFile?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('outFile')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [paths?: Paths]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('paths')
      .toEqualTypeOf<Paths | undefined>()
  })

  it('should match [plugins?: Plugin[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('plugins')
      .toEqualTypeOf<Plugin[] | undefined>()
  })

  it('should match [preserveConstEnums?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveConstEnums')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [preserveSymlinks?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveSymlinks')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [preserveValueImports?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveValueImports')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [preserveWatchOutput?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('preserveWatchOutput')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [pretty?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pretty')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [reactNamespace?: LiteralUnion<"React", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reactNamespace')
      .toEqualTypeOf<LiteralUnion<'React', string> | undefined>()
  })

  it('should match [removeComments?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('removeComments')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [resolveJsonModule?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolveJsonModule')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [resolvePackageJsonExports?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('resolvePackageJsonExports')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [rootDir?: LiteralUnion<"." | "./", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rootDir')
      .toEqualTypeOf<LiteralUnion<'.' | './', string> | undefined>()
  })

  it('should match [rootDirs?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rootDirs')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [skipDefaultLibCheck?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('skipDefaultLibCheck')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [skipLibCheck?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('skipLibCheck')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [sourceMap?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sourceMap')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [sourceRoot?: string]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sourceRoot')
      .toEqualTypeOf<string | undefined>()
  })

  it('should match [strict?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strict')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [strictBindCallApply?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictBindCallApply')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [strictFunctionTypes?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictFunctionTypes')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [strictNullChecks?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictNullChecks')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [strictPropertyInitialization?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strictPropertyInitialization')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [stripInternal?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stripInternal')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [suppressExcessPropertyErrors?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('suppressExcessPropertyErrors')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [suppressImplicitAnyIndexErrors?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('suppressImplicitAnyIndexErrors')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [target?: ScriptTarget | Target]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('target')
      .toEqualTypeOf<ScriptTarget | Target | undefined>()
  })

  it('should match [traceResolution?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('traceResolution')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [tsBuildInfoFile?: LiteralUnion<".tsbuildinfo", string>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tsBuildInfoFile')
      .toEqualTypeOf<LiteralUnion<'.tsbuildinfo', string> | undefined>()
  })

  it('should match [typeRoots?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typeRoots')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [types?: string[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('types')
      .toEqualTypeOf<string[] | undefined>()
  })

  it('should match [useDefineForClassFields?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('useDefineForClassFields')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [useUnknownInCatchVariables?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('useUnknownInCatchVariables')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [watch?: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watch')
      .toEqualTypeOf<boolean | undefined>()
  })

  it('should match [watchDirectory?: WatchDirectory | WatchDirectoryKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchDirectory')
      .toEqualTypeOf<WatchDirectory | WatchDirectoryKind | undefined>()
  })

  it('should match [watchFile?: WatchFile | WatchFileKind]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('watchFile')
      .toEqualTypeOf<WatchFile | WatchFileKind | undefined>()
  })
})
