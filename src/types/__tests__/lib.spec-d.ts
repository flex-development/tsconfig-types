/**
 * @file Unit Tests - Lib
 * @module tsconfig-types/types/tests/Lib
 */

import type TestSubject from '../lib'

describe('unit:types/Lib', () => {
  describe('lowercase', () => {
    it('should allow "dom.iterable"', () => {
      assertType<TestSubject>('dom.iterable')
    })

    it('should allow "dom"', () => {
      assertType<TestSubject>('dom')
    })

    it('should allow "es5"', () => {
      assertType<TestSubject>('es5')
    })

    it('should allow "es6"', () => {
      assertType<TestSubject>('es6')
    })

    it('should allow "es7"', () => {
      assertType<TestSubject>('es7')
    })

    it('should allow "es2015.collection"', () => {
      assertType<TestSubject>('es2015.collection')
    })

    it('should allow "es2015.core"', () => {
      assertType<TestSubject>('es2015.core')
    })

    it('should allow "es2015.generator"', () => {
      assertType<TestSubject>('es2015.generator')
    })

    it('should allow "es2015.iterable"', () => {
      assertType<TestSubject>('es2015.iterable')
    })

    it('should allow "es2015.promise"', () => {
      assertType<TestSubject>('es2015.promise')
    })

    it('should allow "es2015.proxy"', () => {
      assertType<TestSubject>('es2015.proxy')
    })

    it('should allow "es2015.reflect"', () => {
      assertType<TestSubject>('es2015.reflect')
    })

    it('should allow "es2015.symbol.wellknown"', () => {
      assertType<TestSubject>('es2015.symbol.wellknown')
    })

    it('should allow "es2015.symbol"', () => {
      assertType<TestSubject>('es2015.symbol')
    })

    it('should allow "es2015"', () => {
      assertType<TestSubject>('es2015')
    })

    it('should allow "es2016.array.include"', () => {
      assertType<TestSubject>('es2016.array.include')
    })

    it('should allow "es2016"', () => {
      assertType<TestSubject>('es2016')
    })

    it('should allow "es2017.intl"', () => {
      assertType<TestSubject>('es2017.intl')
    })

    it('should allow "es2017.object"', () => {
      assertType<TestSubject>('es2017.object')
    })

    it('should allow "es2017.sharedmemory"', () => {
      assertType<TestSubject>('es2017.sharedmemory')
    })

    it('should allow "es2017.string"', () => {
      assertType<TestSubject>('es2017.string')
    })

    it('should allow "es2017.typedarrays"', () => {
      assertType<TestSubject>('es2017.typedarrays')
    })

    it('should allow "es2017"', () => {
      assertType<TestSubject>('es2017')
    })

    it('should allow "es2018.asyncgenerator"', () => {
      assertType<TestSubject>('es2018.asyncgenerator')
    })

    it('should allow "es2018.asynciterable"', () => {
      assertType<TestSubject>('es2018.asynciterable')
    })

    it('should allow "es2018.intl"', () => {
      assertType<TestSubject>('es2018.intl')
    })

    it('should allow "es2018.promise"', () => {
      assertType<TestSubject>('es2018.promise')
    })

    it('should allow "es2018.regexp"', () => {
      assertType<TestSubject>('es2018.regexp')
    })

    it('should allow "es2018"', () => {
      assertType<TestSubject>('es2018')
    })

    it('should allow "es2019.array"', () => {
      assertType<TestSubject>('es2019.array')
    })

    it('should allow "es2019.object"', () => {
      assertType<TestSubject>('es2019.object')
    })

    it('should allow "es2019.string"', () => {
      assertType<TestSubject>('es2019.string')
    })

    it('should allow "es2019.symbol"', () => {
      assertType<TestSubject>('es2019.symbol')
    })

    it('should allow "es2019"', () => {
      assertType<TestSubject>('es2019')
    })

    it('should allow "es2020.bigint"', () => {
      assertType<TestSubject>('es2020.bigint')
    })

    it('should allow "es2020.intl"', () => {
      assertType<TestSubject>('es2020.intl')
    })

    it('should allow "es2020.promise"', () => {
      assertType<TestSubject>('es2020.promise')
    })

    it('should allow "es2020.sharedmemory"', () => {
      assertType<TestSubject>('es2020.sharedmemory')
    })

    it('should allow "es2020.string"', () => {
      assertType<TestSubject>('es2020.string')
    })

    it('should allow "es2020.symbol.wellknown"', () => {
      assertType<TestSubject>('es2020.symbol.wellknown')
    })

    it('should allow "es2020"', () => {
      assertType<TestSubject>('es2020')
    })

    it('should allow "es2021.promise"', () => {
      assertType<TestSubject>('es2021.promise')
    })

    it('should allow "es2021.string"', () => {
      assertType<TestSubject>('es2021.string')
    })

    it('should allow "es2021.weakref"', () => {
      assertType<TestSubject>('es2021.weakref')
    })

    it('should allow "es2021"', () => {
      assertType<TestSubject>('es2021')
    })

    it('should allow "esnext.array"', () => {
      assertType<TestSubject>('esnext.array')
    })

    it('should allow "esnext.asynciterable"', () => {
      assertType<TestSubject>('esnext.asynciterable')
    })

    it('should allow "esnext.bigint"', () => {
      assertType<TestSubject>('esnext.bigint')
    })

    it('should allow "esnext.intl"', () => {
      assertType<TestSubject>('esnext.intl')
    })

    it('should allow "esnext.promise"', () => {
      assertType<TestSubject>('esnext.promise')
    })

    it('should allow "esnext.string"', () => {
      assertType<TestSubject>('esnext.string')
    })

    it('should allow "esnext.symbol"', () => {
      assertType<TestSubject>('esnext.symbol')
    })

    it('should allow "esnext.weakref"', () => {
      assertType<TestSubject>('esnext.weakref')
    })

    it('should allow "esnext"', () => {
      assertType<TestSubject>('esnext')
    })

    it('should allow "scripthost"', () => {
      assertType<TestSubject>('scripthost')
    })

    it('should allow "webworker.importscripts"', () => {
      assertType<TestSubject>('webworker.importscripts')
    })

    it('should allow "webworker.iterable"', () => {
      assertType<TestSubject>('webworker.iterable')
    })

    it('should allow "webworker"', () => {
      assertType<TestSubject>('webworker')
    })
  })

  describe('uppercase', () => {
    it('should allow "DOM.Iterable"', () => {
      assertType<TestSubject>('DOM.Iterable')
    })

    it('should allow "DOM"', () => {
      assertType<TestSubject>('DOM')
    })

    it('should allow "ES5"', () => {
      assertType<TestSubject>('ES5')
    })

    it('should allow "ES6"', () => {
      assertType<TestSubject>('ES6')
    })

    it('should allow "ES7"', () => {
      assertType<TestSubject>('ES7')
    })

    it('should allow "ES2015.Collection"', () => {
      assertType<TestSubject>('ES2015.Collection')
    })

    it('should allow "ES2015.Core"', () => {
      assertType<TestSubject>('ES2015.Core')
    })

    it('should allow "ES2015.Generator"', () => {
      assertType<TestSubject>('ES2015.Generator')
    })

    it('should allow "ES2015.Iterable"', () => {
      assertType<TestSubject>('ES2015.Iterable')
    })

    it('should allow "ES2015.Promise"', () => {
      assertType<TestSubject>('ES2015.Promise')
    })

    it('should allow "ES2015.Proxy"', () => {
      assertType<TestSubject>('ES2015.Proxy')
    })

    it('should allow "ES2015.Reflect"', () => {
      assertType<TestSubject>('ES2015.Reflect')
    })

    it('should allow "ES2015.Symbol.WellKnown"', () => {
      assertType<TestSubject>('ES2015.Symbol.WellKnown')
    })

    it('should allow "ES2015.Symbol"', () => {
      assertType<TestSubject>('ES2015.Symbol')
    })

    it('should allow "ES2015"', () => {
      assertType<TestSubject>('ES2015')
    })

    it('should allow "ES2016.Array.Include"', () => {
      assertType<TestSubject>('ES2016.Array.Include')
    })

    it('should allow "ES2016"', () => {
      assertType<TestSubject>('ES2016')
    })

    it('should allow "ES2017.Intl"', () => {
      assertType<TestSubject>('ES2017.Intl')
    })

    it('should allow "ES2017.Object"', () => {
      assertType<TestSubject>('ES2017.Object')
    })

    it('should allow "ES2017.SharedMemory"', () => {
      assertType<TestSubject>('ES2017.SharedMemory')
    })

    it('should allow "ES2017.String"', () => {
      assertType<TestSubject>('ES2017.String')
    })

    it('should allow "ES2017.TypedArrays"', () => {
      assertType<TestSubject>('ES2017.TypedArrays')
    })

    it('should allow "ES2017"', () => {
      assertType<TestSubject>('ES2017')
    })

    it('should allow "ES2018.AsyncGenerator"', () => {
      assertType<TestSubject>('ES2018.AsyncGenerator')
    })

    it('should allow "ES2018.AsyncIterable"', () => {
      assertType<TestSubject>('ES2018.AsyncIterable')
    })

    it('should allow "ES2018.Intl"', () => {
      assertType<TestSubject>('ES2018.Intl')
    })

    it('should allow "ES2018.Promise"', () => {
      assertType<TestSubject>('ES2018.Promise')
    })

    it('should allow "ES2018.Regexp"', () => {
      assertType<TestSubject>('ES2018.Regexp')
    })

    it('should allow "ES2018"', () => {
      assertType<TestSubject>('ES2018')
    })

    it('should allow "ES2019.Array"', () => {
      assertType<TestSubject>('ES2019.Array')
    })

    it('should allow "ES2019.Object"', () => {
      assertType<TestSubject>('ES2019.Object')
    })

    it('should allow "ES2019.String"', () => {
      assertType<TestSubject>('ES2019.String')
    })

    it('should allow "ES2019.Symbol"', () => {
      assertType<TestSubject>('ES2019.Symbol')
    })

    it('should allow "ES2019"', () => {
      assertType<TestSubject>('ES2019')
    })

    it('should allow "ES2020.BigInt"', () => {
      assertType<TestSubject>('ES2020.BigInt')
    })

    it('should allow "ES2020.Intl"', () => {
      assertType<TestSubject>('ES2020.Intl')
    })

    it('should allow "ES2020.Promise"', () => {
      assertType<TestSubject>('ES2020.Promise')
    })

    it('should allow "ES2020.SharedMemory"', () => {
      assertType<TestSubject>('ES2020.SharedMemory')
    })

    it('should allow "ES2020.String"', () => {
      assertType<TestSubject>('ES2020.String')
    })

    it('should allow "ES2020.Symbol.WellKnown"', () => {
      assertType<TestSubject>('ES2020.Symbol.WellKnown')
    })

    it('should allow "ES2020"', () => {
      assertType<TestSubject>('ES2020')
    })

    it('should allow "ES2021.Promise"', () => {
      assertType<TestSubject>('ES2021.Promise')
    })

    it('should allow "ES2021.String"', () => {
      assertType<TestSubject>('ES2021.String')
    })

    it('should allow "ES2021.WeakRef"', () => {
      assertType<TestSubject>('ES2021.WeakRef')
    })

    it('should allow "ES2021"', () => {
      assertType<TestSubject>('ES2021')
    })

    it('should allow "ESNext.Array"', () => {
      assertType<TestSubject>('ESNext.Array')
    })

    it('should allow "ESNext.AsyncIterable"', () => {
      assertType<TestSubject>('ESNext.AsyncIterable')
    })

    it('should allow "ESNext.BigInt"', () => {
      assertType<TestSubject>('ESNext.BigInt')
    })

    it('should allow "ESNext.Intl"', () => {
      assertType<TestSubject>('ESNext.Intl')
    })

    it('should allow "ESNext.Promise"', () => {
      assertType<TestSubject>('ESNext.Promise')
    })

    it('should allow "ESNext.String"', () => {
      assertType<TestSubject>('ESNext.String')
    })

    it('should allow "ESNext.Symbol"', () => {
      assertType<TestSubject>('ESNext.Symbol')
    })

    it('should allow "ESNext.WeakRef"', () => {
      assertType<TestSubject>('ESNext.WeakRef')
    })

    it('should allow "ESNext"', () => {
      assertType<TestSubject>('ESNext')
    })

    it('should allow "ScriptHost"', () => {
      assertType<TestSubject>('ScriptHost')
    })

    it('should allow "WebWorker.ImportScripts"', () => {
      assertType<TestSubject>('WebWorker.ImportScripts')
    })

    it('should allow "WebWorker.Iterable"', () => {
      assertType<TestSubject>('WebWorker.Iterable')
    })

    it('should allow "WebWorker"', () => {
      assertType<TestSubject>('WebWorker')
    })
  })
})
