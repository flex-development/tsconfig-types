## [2.0.1](https://github.com/flex-development/tsconfig-types/compare/2.0.0...2.0.1) (2022-12-20)


### :robot: Continuous Integration

* **deps:** Bump actions/checkout from 3.1.0 to 3.2.0 ([#4](https://github.com/flex-development/tsconfig-types/issues/4)) ([310c2dd](https://github.com/flex-development/tsconfig-types/commit/310c2dde4b32d1c90593c1bc9fde30e5373f3479))


### :bug: Fixes

* **types:** [`WatchOptions`] same-directory import statements ([#6](https://github.com/flex-development/tsconfig-types/issues/6)) ([aa1940a](https://github.com/flex-development/tsconfig-types/commit/aa1940a5c5a2598d400d9d1403d12cf856a9977e))

## [2.0.0](https://github.com/flex-development/tsconfig-types/compare/1.0.0...2.0.0) (2022-12-04)


### ⚠ BREAKING CHANGES

* **enums:** remove `WatchDirectoryKind.PriorityPollingInterval`
* **deps-peer:** bump @flex-development/tutils from 6.0.0-alpha.3 to 6.0.0-alpha.7

### :package: Build

* **deps-peer:** bump @flex-development/tutils from 6.0.0-alpha.3 to 6.0.0-alpha.7 ([11ac73f](https://github.com/flex-development/tsconfig-types/commit/11ac73f2068f626a2d24ea6e96bb7e2640260c2b))


### :robot: Continuous Integration

* **deps:** Bump dessant/lock-threads from 3.0.0 to 4.0.0 ([#2](https://github.com/flex-development/tsconfig-types/issues/2)) ([9fc1f3d](https://github.com/flex-development/tsconfig-types/commit/9fc1f3dba6a560b299fbdda4522f0e9f58f4774d))


### :pencil: Documentation

* related ([e8840f3](https://github.com/flex-development/tsconfig-types/commit/e8840f3a65de78b07b9a49bb5298e16aca914d4c))


### :bug: Fixes

* **enums:** remove `WatchDirectoryKind.PriorityPollingInterval` ([c367d77](https://github.com/flex-development/tsconfig-types/commit/c367d775d05fc12258b95f171859bc9a8f1c4b85))


### :house_with_garden: Housekeeping

* update project architecture ([bbd2d00](https://github.com/flex-development/tsconfig-types/commit/bbd2d00f8fe68823bf28dc44705a75ff7a3192b7))
* update project description ([6c53c52](https://github.com/flex-development/tsconfig-types/commit/6c53c528078de815580bab306bb23a6552effbf7))


### :zap: Refactors

* **ts:** ensure definitions are json-compatible ([b1cd1af](https://github.com/flex-development/tsconfig-types/commit/b1cd1af7d9e1d978213b47c0f423367ef5b6a0b2))
* **ts:** prevent re-opening of closed definitions ([1459f07](https://github.com/flex-development/tsconfig-types/commit/1459f07f88012243581fe6bf54296509fb2aa426))


### :white_check_mark: Testing

* **enums:** add enum tests ([9e797f3](https://github.com/flex-development/tsconfig-types/commit/9e797f36b07f41517a66e71ff621d4733712edab))

## 1.0.0 (2022-11-29)


### :package: Build

* **ts:** ensure majority of build files are `.d.mts` ([9b5dad2](https://github.com/flex-development/tsconfig-types/commit/9b5dad260d1916554a2b03e7514903d11e5919bf))


### :pencil: Documentation

* add esm-only warning to install guide ([e85fb75](https://github.com/flex-development/tsconfig-types/commit/e85fb7532d4b6565d7c3f63727ce69d8eab653e2))
* api ([13f57fa](https://github.com/flex-development/tsconfig-types/commit/13f57fa60abd3301c0b0fb354abb4af6951ad801))
* use ([bd774d0](https://github.com/flex-development/tsconfig-types/commit/bd774d0b21a62875ab67bc64fc2c4d41c3cf14b7))


### :sparkles: Features

* **enums:** `ImportsNotUsedKind` ([87909c5](https://github.com/flex-development/tsconfig-types/commit/87909c53c5d9929a857643a4dbb3418c7c222e57))
* **enums:** `JsxEmit` ([ee41dc1](https://github.com/flex-development/tsconfig-types/commit/ee41dc18bad6d3171ea5a9f23e7fb05a3df15e11))
* **enums:** `ModuleDetectionKind` ([1ede894](https://github.com/flex-development/tsconfig-types/commit/1ede89480efb3220930952be87305ee7b6ba2b2f))
* **enums:** `ModuleKind` ([98e0e6c](https://github.com/flex-development/tsconfig-types/commit/98e0e6c435048e0c94210bc1af2797bc862ca2fd))
* **enums:** `ModuleResolutionKind` ([e55c109](https://github.com/flex-development/tsconfig-types/commit/e55c109a96c7f60c4c815ba22e6d84d579d228d9))
* **enums:** `NewLineKind` ([764d9e3](https://github.com/flex-development/tsconfig-types/commit/764d9e3d369d505367c78ab4935f730c3790a517))
* **enums:** `PollingWatchKind` ([621f558](https://github.com/flex-development/tsconfig-types/commit/621f558b391c57143b98086ed7c4789106ca4c90))
* **enums:** `ScriptTarget` ([c99aaea](https://github.com/flex-development/tsconfig-types/commit/c99aaea2c613b4048a2f988beec5c92f396f70d7))
* **enums:** `WatchDirectoryKind` ([4c32420](https://github.com/flex-development/tsconfig-types/commit/4c32420b6095261a9d69f8414ccbc76d45b39c6d))
* **enums:** `WatchFileKind` ([d9d22a7](https://github.com/flex-development/tsconfig-types/commit/d9d22a777e4489a4c0723c3809a6752c90190cc3))
* **interfaces:** `BuildOptions` ([b8bfa94](https://github.com/flex-development/tsconfig-types/commit/b8bfa947eb8aecd032edea98f30b0c9a053acfd5))
* **interfaces:** `CompilerOptions` ([645b692](https://github.com/flex-development/tsconfig-types/commit/645b69231b34778616dbc960b67d072cc83483c9))
* **interfaces:** `Plugin` ([61b9154](https://github.com/flex-development/tsconfig-types/commit/61b9154b85e099acb2369027abfc6e7919a814a2))
* **interfaces:** `ProjectReference` ([7107ebe](https://github.com/flex-development/tsconfig-types/commit/7107ebec990f5a38f9e9008b767392987d495510))
* **interfaces:** `TSConfig` ([c44785f](https://github.com/flex-development/tsconfig-types/commit/c44785f4eb8c4f9acda02c5df9d37731dd56cce3))
* **interfaces:** `TsNodeOptions` ([f57e976](https://github.com/flex-development/tsconfig-types/commit/f57e97646887f19d1362d84fff87be2a46da6268))
* **interfaces:** `TypeAcquisition` ([daac132](https://github.com/flex-development/tsconfig-types/commit/daac132c572230cac944534e076f458a7c91ad28))
* **interfaces:** `WatchOptions` ([7b3fd13](https://github.com/flex-development/tsconfig-types/commit/7b3fd1397775a5a5b1a6e455159eae5263812d34))
* **types:** `CompilerOptionsValue` ([8e46cfc](https://github.com/flex-development/tsconfig-types/commit/8e46cfc6d36f4247d18b0e72e74bd528890e4597))
* **types:** `FallbackPolling` ([2bd5c6e](https://github.com/flex-development/tsconfig-types/commit/2bd5c6ec604aa25cb752a3a67c95d4a84c40df64))
* **types:** `ImportsNotUsedAsValues` ([90e8391](https://github.com/flex-development/tsconfig-types/commit/90e83917552427802f7c04955dd0188211f62aa2))
* **types:** `Jsx` ([04d1fdb](https://github.com/flex-development/tsconfig-types/commit/04d1fdb5ea3549a5831792eabcece813a2478d7c))
* **types:** `Lib` ([ac5468f](https://github.com/flex-development/tsconfig-types/commit/ac5468fd81a6e6a349f55a5f0ac1a8f183122bcd))
* **types:** `Module` ([d1d1dc6](https://github.com/flex-development/tsconfig-types/commit/d1d1dc654d7c220bf1cee40e7149312ad54bbc91))
* **types:** `ModuleDetection` ([f763446](https://github.com/flex-development/tsconfig-types/commit/f763446f3f95ec40c633ab2604c0a3f1f553627c))
* **types:** `ModuleResolution` ([ff2c5d6](https://github.com/flex-development/tsconfig-types/commit/ff2c5d64845fdd3e654be944f023f298c3ebab34))
* **types:** `NewLine` ([7136b71](https://github.com/flex-development/tsconfig-types/commit/7136b7138cff9677dc77b48b29e4c97f5bf89cf3))
* **types:** `Paths` ([f38e065](https://github.com/flex-development/tsconfig-types/commit/f38e0650c256cc2f42f85b62bb5f95664db13bc3))
* **types:** `PollingWatch` ([964c48f](https://github.com/flex-development/tsconfig-types/commit/964c48fcaea4c29eace93560f13e86359b064407))
* **types:** `Target` ([7eb6d05](https://github.com/flex-development/tsconfig-types/commit/7eb6d0558f4f5f6e5139b3a1953c0f0cc3526552))
* **types:** `WatchDirectory` ([62539f0](https://github.com/flex-development/tsconfig-types/commit/62539f0e260b04b7ff0a6a2622f402f42aa320af))
* **types:** `WatchFile` ([143cac2](https://github.com/flex-development/tsconfig-types/commit/143cac207ca9a38ef1b220ea84dd253a071b8794))


### :house_with_garden: Housekeeping

* **github:** add commit scope `enums` ([631334d](https://github.com/flex-development/tsconfig-types/commit/631334dbf1a418880a3d64f1dbf35083bce73a46))
* **tests:** re-organize tests ([df80f1c](https://github.com/flex-development/tsconfig-types/commit/df80f1cc75ff8b009defa4b46bf9f8b783d6f166))
* **tests:** setup type testing ([1382bdd](https://github.com/flex-development/tsconfig-types/commit/1382bdd83b2b37f34492b755d1b1ae0e25a5ae4a)), closes [vitest-dev/vitest#2300](https://github.com/vitest-dev/vitest/issues/2300)
* **ts:** enforce `exactOptionalPropertyTypes` ([5d89573](https://github.com/flex-development/tsconfig-types/commit/5d89573c76576bfdc5bf1244fd63e1e70e03257e))
