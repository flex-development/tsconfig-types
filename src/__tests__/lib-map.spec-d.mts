/**
 * @file Type Tests - LibMap
 * @module tsconfig-types/tests/unit-d/LibMap
 */

import type TestSubject from '#lib/lib-map'

describe('unit-d:LibMap', () => {
  it('should match [decorators: "decorators"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('decorators')
      .toEqualTypeOf<'decorators'>()
  })

  it('should match [decoratorsLegacy: "decorators.legacy"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('decoratorsLegacy')
      .toEqualTypeOf<'decorators.legacy'>()
  })

  it('should match [dom: "dom"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('dom').toEqualTypeOf<'dom'>()
  })

  it('should match [domIterable: "dom.iterable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('domIterable')
      .toEqualTypeOf<'dom.iterable'>()
  })

  it('should match [es5: "es5"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es5').toEqualTypeOf<'es5'>()
  })

  it('should match [es6: "es6"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es6').toEqualTypeOf<'es6'>()
  })

  it('should match [es7: "es7"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('es7').toEqualTypeOf<'es7'>()
  })

  it('should match [es2015: "es2015"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015')
      .toEqualTypeOf<'es2015'>()
  })

  it('should match [es2015collection: "es2015.collection"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015collection')
      .toEqualTypeOf<'es2015.collection'>()
  })

  it('should match [es2015core: "es2015.core"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015core')
      .toEqualTypeOf<'es2015.core'>()
  })

  it('should match [es2015generator: "es2015.generator"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015generator')
      .toEqualTypeOf<'es2015.generator'>()
  })

  it('should match [es2015iterable: "es2015.iterable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015iterable')
      .toEqualTypeOf<'es2015.iterable'>()
  })

  it('should match [es2015promise: "es2015.promise"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015promise')
      .toEqualTypeOf<'es2015.promise'>()
  })

  it('should match [es2015proxy: "es2015.proxy"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015proxy')
      .toEqualTypeOf<'es2015.proxy'>()
  })

  it('should match [es2015reflect: "es2015.reflect"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015reflect')
      .toEqualTypeOf<'es2015.reflect'>()
  })

  it('should match [es2015symbol: "es2015.symbol"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015symbol')
      .toEqualTypeOf<'es2015.symbol'>()
  })

  it('should match [es2015symbolwellknown: "es2015.symbol.wellknown"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2015symbolwellknown')
      .toEqualTypeOf<'es2015.symbol.wellknown'>()
  })

  it('should match [es2016: "es2016"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2016')
      .toEqualTypeOf<'es2016'>()
  })

  it('should match [es2016arrayinclude: "es2016.array.include"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2016arrayinclude')
      .toEqualTypeOf<'es2016.array.include'>()
  })

  it('should match [es2016full: "es2016.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2016full')
      .toEqualTypeOf<'es2016.full'>()
  })

  it('should match [es2017: "es2017"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017')
      .toEqualTypeOf<'es2017'>()
  })

  it('should match [es2017full: "es2017.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017full')
      .toEqualTypeOf<'es2017.full'>()
  })

  it('should match [es2017intl: "es2017.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017intl')
      .toEqualTypeOf<'es2017.intl'>()
  })

  it('should match [es2017object: "es2017.object"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017object')
      .toEqualTypeOf<'es2017.object'>()
  })

  it('should match [es2017sharedmemory: "es2017.sharedmemory"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017sharedmemory')
      .toEqualTypeOf<'es2017.sharedmemory'>()
  })

  it('should match [es2017string: "es2017.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017string')
      .toEqualTypeOf<'es2017.string'>()
  })

  it('should match [es2017typedarrays: "es2017.typedarrays"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2017typedarrays')
      .toEqualTypeOf<'es2017.typedarrays'>()
  })

  it('should match [es2018: "es2018"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018')
      .toEqualTypeOf<'es2018'>()
  })

  it('should match [es2018asyncgenerator: "es2018.asyncgenerator"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018asyncgenerator')
      .toEqualTypeOf<'es2018.asyncgenerator'>()
  })

  it('should match [es2018asynciterable: "es2018.asynciterable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018asynciterable')
      .toEqualTypeOf<'es2018.asynciterable'>()
  })

  it('should match [es2018full: "es2018.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018full')
      .toEqualTypeOf<'es2018.full'>()
  })

  it('should match [es2018intl: "es2018.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018intl')
      .toEqualTypeOf<'es2018.intl'>()
  })

  it('should match [es2018promise: "es2018.promise"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018promise')
      .toEqualTypeOf<'es2018.promise'>()
  })

  it('should match [es2018regexp: "es2018.regexp"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2018regexp')
      .toEqualTypeOf<'es2018.regexp'>()
  })

  it('should match [es2019: "es2019"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019')
      .toEqualTypeOf<'es2019'>()
  })

  it('should match [es2019array: "es2019.array"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019array')
      .toEqualTypeOf<'es2019.array'>()
  })

  it('should match [es2019full: "es2019.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019full')
      .toEqualTypeOf<'es2019.full'>()
  })

  it('should match [es2019intl: "es2019.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019intl')
      .toEqualTypeOf<'es2019.intl'>()
  })

  it('should match [es2019object: "es2019.object"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019object')
      .toEqualTypeOf<'es2019.object'>()
  })

  it('should match [es2019string: "es2019.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019string')
      .toEqualTypeOf<'es2019.string'>()
  })

  it('should match [es2019symbol: "es2019.symbol"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2019symbol')
      .toEqualTypeOf<'es2019.symbol'>()
  })

  it('should match [es2020: "es2020"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020')
      .toEqualTypeOf<'es2020'>()
  })

  it('should match [es2020bigint: "es2020.bigint"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020bigint')
      .toEqualTypeOf<'es2020.bigint'>()
  })

  it('should match [es2020date: "es2020.date"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020date')
      .toEqualTypeOf<'es2020.date'>()
  })

  it('should match [es2020full: "es2020.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020full')
      .toEqualTypeOf<'es2020.full'>()
  })

  it('should match [es2020intl: "es2020.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020intl')
      .toEqualTypeOf<'es2020.intl'>()
  })

  it('should match [es2020number: "es2020.number"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020number')
      .toEqualTypeOf<'es2020.number'>()
  })

  it('should match [es2020promise: "es2020.promise"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020promise')
      .toEqualTypeOf<'es2020.promise'>()
  })

  it('should match [es2020sharedmemory: "es2020.sharedmemory"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020sharedmemory')
      .toEqualTypeOf<'es2020.sharedmemory'>()
  })

  it('should match [es2020string: "es2020.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020string')
      .toEqualTypeOf<'es2020.string'>()
  })

  it('should match [es2020symbolwellknown: "es2020.symbol.wellknown"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2020symbolwellknown')
      .toEqualTypeOf<'es2020.symbol.wellknown'>()
  })

  it('should match [es2021: "es2021"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021')
      .toEqualTypeOf<'es2021'>()
  })

  it('should match [es2021full: "es2021.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021full')
      .toEqualTypeOf<'es2021.full'>()
  })

  it('should match [es2021intl: "es2021.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021intl')
      .toEqualTypeOf<'es2021.intl'>()
  })

  it('should match [es2021promise: "es2021.promise"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021promise')
      .toEqualTypeOf<'es2021.promise'>()
  })

  it('should match [es2021string: "es2021.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021string')
      .toEqualTypeOf<'es2021.string'>()
  })

  it('should match [es2021weakref: "es2021.weakref"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2021weakref')
      .toEqualTypeOf<'es2021.weakref'>()
  })

  it('should match [es2022: "es2022"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022')
      .toEqualTypeOf<'es2022'>()
  })

  it('should match [es2022array: "es2022.array"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022array')
      .toEqualTypeOf<'es2022.array'>()
  })

  it('should match [es2022error: "es2022.error"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022error')
      .toEqualTypeOf<'es2022.error'>()
  })

  it('should match [es2022full: "es2022.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022full')
      .toEqualTypeOf<'es2022.full'>()
  })

  it('should match [es2022intl: "es2022.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022intl')
      .toEqualTypeOf<'es2022.intl'>()
  })

  it('should match [es2022object: "es2022.object"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022object')
      .toEqualTypeOf<'es2022.object'>()
  })

  it('should match [es2022regexp: "es2022.regexp"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022regexp')
      .toEqualTypeOf<'es2022.regexp'>()
  })

  it('should match [es2022sharedmemory: "es2022.sharedmemory"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022sharedmemory')
      .toEqualTypeOf<'es2022.sharedmemory'>()
  })

  it('should match [es2022string: "es2022.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2022string')
      .toEqualTypeOf<'es2022.string'>()
  })

  it('should match [es2023: "es2023"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2023')
      .toEqualTypeOf<'es2023'>()
  })

  it('should match [es2023array: "es2023.array"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2023array')
      .toEqualTypeOf<'es2023.array'>()
  })

  it('should match [es2023full: "es2023.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2023full')
      .toEqualTypeOf<'es2023.full'>()
  })

  it('should match [es2024: "es2024"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024')
      .toEqualTypeOf<'es2024'>()
  })

  it('should match [es2024arraybuffer: "es2024.arraybuffer"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024arraybuffer')
      .toEqualTypeOf<'es2024.arraybuffer'>()
  })

  it('should match [es2024collection: "es2024.collection"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024collection')
      .toEqualTypeOf<'es2024.collection'>()
  })

  it('should match [es2024full: "es2024.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024full')
      .toEqualTypeOf<'es2024.full'>()
  })

  it('should match [es2024object: "es2024.object"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024object')
      .toEqualTypeOf<'es2024.object'>()
  })

  it('should match [es2024promise: "es2024.promise"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024promise')
      .toEqualTypeOf<'es2024.promise'>()
  })

  it('should match [es2024regexp: "es2024.regexp"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024regexp')
      .toEqualTypeOf<'es2024.regexp'>()
  })

  it('should match [es2024sharedmemory: "es2024.sharedmemory"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024sharedmemory')
      .toEqualTypeOf<'es2024.sharedmemory'>()
  })

  it('should match [es2024string: "es2024.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('es2024string')
      .toEqualTypeOf<'es2024.string'>()
  })

  it('should match [esnext: "esnext"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnext')
      .toEqualTypeOf<'esnext'>()
  })

  it('should match [esnextArray: "esnext.array"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextArray')
      .toEqualTypeOf<'esnext.array'>()
  })

  it('should match [esnextAsyncIterable: "esnext.asynciterable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextAsyncIterable')
      .toEqualTypeOf<'esnext.asynciterable'>()
  })

  it('should match [esnextBigint: "esnext.bigint"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextBigint')
      .toEqualTypeOf<'esnext.bigint'>()
  })

  it('should match [esnextDecorators: "esnext.decorators"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextDecorators')
      .toEqualTypeOf<'esnext.decorators'>()
  })

  it('should match [esnextDisposable: "esnext.disposable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextDisposable')
      .toEqualTypeOf<'esnext.disposable'>()
  })

  it('should match [esnextFull: "esnext.full"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextFull')
      .toEqualTypeOf<'esnext.full'>()
  })

  it('should match [esnextIntl: "esnext.intl"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextIntl')
      .toEqualTypeOf<'esnext.intl'>()
  })

  it('should match [esnextIterator: "esnext.iterator"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextIterator')
      .toEqualTypeOf<'esnext.iterator'>()
  })

  it('should match [esnextObject: "esnext.object"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextObject')
      .toEqualTypeOf<'esnext.object'>()
  })

  it('should match [esnextPromise: "esnext.promise"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextPromise')
      .toEqualTypeOf<'esnext.promise'>()
  })

  it('should match [esnextString: "esnext.string"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextString')
      .toEqualTypeOf<'esnext.string'>()
  })

  it('should match [esnextSymbol: "esnext.symbol"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextSymbol')
      .toEqualTypeOf<'esnext.symbol'>()
  })

  it('should match [esnextWeakRef: "esnext.weakref"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('esnextWeakRef')
      .toEqualTypeOf<'esnext.weakref'>()
  })

  it('should match [scripthost: "scripthost"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('scripthost')
      .toEqualTypeOf<'scripthost'>()
  })

  it('should match [webworker: "webworker"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('webworker')
      .toEqualTypeOf<'webworker'>()
  })

  it('should match [webworkerAsyncIterable: "webworker.asynciterable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('webworkerAsyncIterable')
      .toEqualTypeOf<'webworker.asynciterable'>()
  })

  it('should match [webworkerImportScripts: "webworker.importscripts"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('webworkerImportScripts')
      .toEqualTypeOf<'webworker.importscripts'>()
  })

  it('should match [webworkerIterable: "webworker.iterable"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('webworkerIterable')
      .toEqualTypeOf<'webworker.iterable'>()
  })
})
