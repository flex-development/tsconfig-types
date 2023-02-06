/**
 * @file Type Tests - Lib
 * @module tsconfig-types/types/tests/Lib
 */

import type { JsonValue } from '@flex-development/tutils'
import type TestSubject from '../lib'

describe('unit:types/Lib', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract "Decorators.Legacy"', () => {
    expectTypeOf<TestSubject>().extract<'Decorators.Legacy'>().toBeString()
  })

  it('should extract "Decorators"', () => {
    expectTypeOf<TestSubject>().extract<'Decorators'>().toBeString()
  })

  it('should extract "DOM.Iterable"', () => {
    expectTypeOf<TestSubject>().extract<'DOM.Iterable'>().toBeString()
  })

  it('should extract "DOM"', () => {
    expectTypeOf<TestSubject>().extract<'DOM'>().toBeString()
  })

  it('should extract "ES5"', () => {
    expectTypeOf<TestSubject>().extract<'ES5'>().toBeString()
  })

  it('should extract "ES6"', () => {
    expectTypeOf<TestSubject>().extract<'ES6'>().toBeString()
  })

  it('should extract "ES7"', () => {
    expectTypeOf<TestSubject>().extract<'ES7'>().toBeString()
  })

  it('should extract "ES2015.Collection"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Collection'>().toBeString()
  })

  it('should extract "ES2015.Core"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Core'>().toBeString()
  })

  it('should extract "ES2015.Generator"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Generator'>().toBeString()
  })

  it('should extract "ES2015.Iterable"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Iterable'>().toBeString()
  })

  it('should extract "ES2015.Promise"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Promise'>().toBeString()
  })

  it('should extract "ES2015.Proxy"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Proxy'>().toBeString()
  })

  it('should extract "ES2015.Reflect"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Reflect'>().toBeString()
  })

  it('should extract "ES2015.Symbol.WellKnown"', () => {
    expectTypeOf<TestSubject>()
      .extract<'ES2015.Symbol.WellKnown'>()
      .toBeString()
  })

  it('should extract "ES2015.Symbol"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015.Symbol'>().toBeString()
  })

  it('should extract "ES2015"', () => {
    expectTypeOf<TestSubject>().extract<'ES2015'>().toBeString()
  })

  it('should extract "ES2016.Array.Include"', () => {
    expectTypeOf<TestSubject>().extract<'ES2016.Array.Include'>().toBeString()
  })

  it('should extract "ES2016.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2016.Full'>().toBeString()
  })

  it('should extract "ES2016"', () => {
    expectTypeOf<TestSubject>().extract<'ES2016'>().toBeString()
  })

  it('should extract "ES2017.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017.Full'>().toBeString()
  })

  it('should extract "ES2017.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017.Intl'>().toBeString()
  })

  it('should extract "ES2017.Object"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017.Object'>().toBeString()
  })

  it('should extract "ES2017.SharedMemory"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017.SharedMemory'>().toBeString()
  })

  it('should extract "ES2017.String"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017.String'>().toBeString()
  })

  it('should extract "ES2017.TypedArrays"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017.TypedArrays'>().toBeString()
  })

  it('should extract "ES2017"', () => {
    expectTypeOf<TestSubject>().extract<'ES2017'>().toBeString()
  })

  it('should extract "ES2018.AsyncGenerator"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018.AsyncGenerator'>().toBeString()
  })

  it('should extract "ES2018.AsyncIterable"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018.AsyncIterable'>().toBeString()
  })

  it('should extract "ES2018.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018.Full'>().toBeString()
  })

  it('should extract "ES2018.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018.Intl'>().toBeString()
  })

  it('should extract "ES2018.Promise"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018.Promise'>().toBeString()
  })

  it('should extract "ES2018.Regexp"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018.Regexp'>().toBeString()
  })

  it('should extract "ES2018"', () => {
    expectTypeOf<TestSubject>().extract<'ES2018'>().toBeString()
  })

  it('should extract "ES2019.Array"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019.Array'>().toBeString()
  })

  it('should extract "ES2019.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019.Full'>().toBeString()
  })

  it('should extract "ES2019.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019.Intl'>().toBeString()
  })

  it('should extract "ES2019.Object"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019.Object'>().toBeString()
  })

  it('should extract "ES2019.String"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019.String'>().toBeString()
  })

  it('should extract "ES2019.Symbol"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019.Symbol'>().toBeString()
  })

  it('should extract "ES2019"', () => {
    expectTypeOf<TestSubject>().extract<'ES2019'>().toBeString()
  })

  it('should extract "ES2020.BigInt"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.BigInt'>().toBeString()
  })

  it('should extract "ES2020.Date"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.Date'>().toBeString()
  })

  it('should extract "ES2020.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.Full'>().toBeString()
  })

  it('should extract "ES2020.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.Intl'>().toBeString()
  })

  it('should extract "ES2020.Number"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.Number'>().toBeString()
  })

  it('should extract "ES2020.Promise"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.Promise'>().toBeString()
  })

  it('should extract "ES2020.SharedMemory"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.SharedMemory'>().toBeString()
  })

  it('should extract "ES2020.String"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020.String'>().toBeString()
  })

  it('should extract "ES2020.Symbol.WellKnown"', () => {
    expectTypeOf<TestSubject>()
      .extract<'ES2020.Symbol.WellKnown'>()
      .toBeString()
  })

  it('should extract "ES2020"', () => {
    expectTypeOf<TestSubject>().extract<'ES2020'>().toBeString()
  })

  it('should extract "ES2021.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021.Full'>().toBeString()
  })

  it('should extract "ES2021.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021.Intl'>().toBeString()
  })

  it('should extract "ES2021.Promise"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021.Promise'>().toBeString()
  })

  it('should extract "ES2021.String"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021.String'>().toBeString()
  })

  it('should extract "ES2021.WeakRef"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021.WeakRef'>().toBeString()
  })

  it('should extract "ES2021"', () => {
    expectTypeOf<TestSubject>().extract<'ES2021'>().toBeString()
  })

  it('should extract "ES2022.Array"', () => {
    expectTypeOf<TestSubject>().extract<'ES2022.Array'>().toBeString()
  })

  it('should extract "ES2022.Error"', () => {
    expectTypeOf<TestSubject>().extract<'ES2022.Error'>().toBeString()
  })

  it('should extract "ES2022.Full"', () => {
    expectTypeOf<TestSubject>().extract<'ES2022.Full'>().toBeString()
  })

  it('should extract "ES2022.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ES2022.Intl'>().toBeString()
  })

  it('should extract "ESNext.Array"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.Array'>().toBeString()
  })

  it('should extract "ESNext.AsyncIterable"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.AsyncIterable'>().toBeString()
  })

  it('should extract "ESNext.BigInt"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.BigInt'>().toBeString()
  })

  it('should extract "ESNext.Intl"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.Intl'>().toBeString()
  })

  it('should extract "ESNext.Promise"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.Promise'>().toBeString()
  })

  it('should extract "ESNext.String"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.String'>().toBeString()
  })

  it('should extract "ESNext.Symbol"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.Symbol'>().toBeString()
  })

  it('should extract "ESNext.WeakRef"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext.WeakRef'>().toBeString()
  })

  it('should extract "ESNext"', () => {
    expectTypeOf<TestSubject>().extract<'ESNext'>().toBeString()
  })

  it('should extract "ScriptHost"', () => {
    expectTypeOf<TestSubject>().extract<'ScriptHost'>().toBeString()
  })

  it('should extract "WebWorker.ImportScripts"', () => {
    expectTypeOf<TestSubject>()
      .extract<'WebWorker.ImportScripts'>()
      .toBeString()
  })

  it('should extract "WebWorker.Iterable"', () => {
    expectTypeOf<TestSubject>().extract<'WebWorker.Iterable'>().toBeString()
  })

  it('should extract "WebWorker"', () => {
    expectTypeOf<TestSubject>().extract<'WebWorker'>().toBeString()
  })

  describe('lowercase', () => {
    it('should extract "decorators.legacy"', () => {
      expectTypeOf<TestSubject>().extract<'decorators.legacy'>().toBeString()
    })

    it('should extract "decorators"', () => {
      expectTypeOf<TestSubject>().extract<'decorators'>().toBeString()
    })

    it('should extract "dom.iterable"', () => {
      expectTypeOf<TestSubject>().extract<'dom.iterable'>().toBeString()
    })

    it('should extract "dom"', () => {
      expectTypeOf<TestSubject>().extract<'dom'>().toBeString()
    })

    it('should extract "es5"', () => {
      expectTypeOf<TestSubject>().extract<'es5'>().toBeString()
    })

    it('should extract "es6"', () => {
      expectTypeOf<TestSubject>().extract<'es6'>().toBeString()
    })

    it('should extract "es7"', () => {
      expectTypeOf<TestSubject>().extract<'es7'>().toBeString()
    })

    it('should extract "es2015.collection"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.collection'>().toBeString()
    })

    it('should extract "es2015.core"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.core'>().toBeString()
    })

    it('should extract "es2015.generator"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.generator'>().toBeString()
    })

    it('should extract "es2015.iterable"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.iterable'>().toBeString()
    })

    it('should extract "es2015.promise"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.promise'>().toBeString()
    })

    it('should extract "es2015.proxy"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.proxy'>().toBeString()
    })

    it('should extract "es2015.reflect"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.reflect'>().toBeString()
    })

    it('should extract "es2015.symbol.wellknown"', () => {
      expectTypeOf<TestSubject>()
        .extract<'es2015.symbol.wellknown'>()
        .toBeString()
    })

    it('should extract "es2015.symbol"', () => {
      expectTypeOf<TestSubject>().extract<'es2015.symbol'>().toBeString()
    })

    it('should extract "es2015"', () => {
      expectTypeOf<TestSubject>().extract<'es2015'>().toBeString()
    })

    it('should extract "es2016.array.include"', () => {
      expectTypeOf<TestSubject>().extract<'es2016.array.include'>().toBeString()
    })

    it('should extract "es2016.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2016.full'>().toBeString()
    })

    it('should extract "es2016"', () => {
      expectTypeOf<TestSubject>().extract<'es2016'>().toBeString()
    })

    it('should extract "es2017.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2017.full'>().toBeString()
    })

    it('should extract "es2017.intl"', () => {
      expectTypeOf<TestSubject>().extract<'es2017.intl'>().toBeString()
    })

    it('should extract "es2017.object"', () => {
      expectTypeOf<TestSubject>().extract<'es2017.object'>().toBeString()
    })

    it('should extract "es2017.sharedmemory"', () => {
      expectTypeOf<TestSubject>().extract<'es2017.sharedmemory'>().toBeString()
    })

    it('should extract "es2017.string"', () => {
      expectTypeOf<TestSubject>().extract<'es2017.string'>().toBeString()
    })

    it('should extract "es2017.typedarrays"', () => {
      expectTypeOf<TestSubject>().extract<'es2017.typedarrays'>().toBeString()
    })

    it('should extract "es2017"', () => {
      expectTypeOf<TestSubject>().extract<'es2017'>().toBeString()
    })

    it('should extract "es2018.asyncgenerator"', () => {
      expectTypeOf<TestSubject>()
        .extract<'es2018.asyncgenerator'>()
        .toBeString()
    })

    it('should extract "es2018.asynciterable"', () => {
      expectTypeOf<TestSubject>().extract<'es2018.asynciterable'>().toBeString()
    })

    it('should extract "es2018.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2018.full'>().toBeString()
    })

    it('should extract "es2018.intl"', () => {
      expectTypeOf<TestSubject>().extract<'es2018.intl'>().toBeString()
    })

    it('should extract "es2018.promise"', () => {
      expectTypeOf<TestSubject>().extract<'es2018.promise'>().toBeString()
    })

    it('should extract "es2018.regexp"', () => {
      expectTypeOf<TestSubject>().extract<'es2018.regexp'>().toBeString()
    })

    it('should extract "es2018"', () => {
      expectTypeOf<TestSubject>().extract<'es2018'>().toBeString()
    })

    it('should extract "es2019.array"', () => {
      expectTypeOf<TestSubject>().extract<'es2019.array'>().toBeString()
    })

    it('should extract "es2019.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2019.full'>().toBeString()
    })

    it('should extract "es2019.intl"', () => {
      expectTypeOf<TestSubject>().extract<'es2019.intl'>().toBeString()
    })

    it('should extract "es2019.object"', () => {
      expectTypeOf<TestSubject>().extract<'es2019.object'>().toBeString()
    })

    it('should extract "es2019.string"', () => {
      expectTypeOf<TestSubject>().extract<'es2019.string'>().toBeString()
    })

    it('should extract "es2019.symbol"', () => {
      expectTypeOf<TestSubject>().extract<'es2019.symbol'>().toBeString()
    })

    it('should extract "es2019"', () => {
      expectTypeOf<TestSubject>().extract<'es2019'>().toBeString()
    })

    it('should extract "es2020.bigint"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.bigint'>().toBeString()
    })

    it('should extract "es2020.date"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.date'>().toBeString()
    })

    it('should extract "es2020.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.full'>().toBeString()
    })

    it('should extract "es2020.intl"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.intl'>().toBeString()
    })

    it('should extract "es2020.number"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.number'>().toBeString()
    })

    it('should extract "es2020.promise"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.promise'>().toBeString()
    })

    it('should extract "es2020.sharedmemory"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.sharedmemory'>().toBeString()
    })

    it('should extract "es2020.string"', () => {
      expectTypeOf<TestSubject>().extract<'es2020.string'>().toBeString()
    })

    it('should extract "es2020.symbol.wellknown"', () => {
      expectTypeOf<TestSubject>()
        .extract<'es2020.symbol.wellknown'>()
        .toBeString()
    })

    it('should extract "es2020"', () => {
      expectTypeOf<TestSubject>().extract<'es2020'>().toBeString()
    })

    it('should extract "es2021.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2021.full'>().toBeString()
    })

    it('should extract "es2021.intl"', () => {
      expectTypeOf<TestSubject>().extract<'es2021.intl'>().toBeString()
    })

    it('should extract "es2021.promise"', () => {
      expectTypeOf<TestSubject>().extract<'es2021.promise'>().toBeString()
    })

    it('should extract "es2021.string"', () => {
      expectTypeOf<TestSubject>().extract<'es2021.string'>().toBeString()
    })

    it('should extract "es2021.weakref"', () => {
      expectTypeOf<TestSubject>().extract<'es2021.weakref'>().toBeString()
    })

    it('should extract "es2021"', () => {
      expectTypeOf<TestSubject>().extract<'es2021'>().toBeString()
    })

    it('should extract "es2022.array"', () => {
      expectTypeOf<TestSubject>().extract<'es2022.array'>().toBeString()
    })

    it('should extract "es2022.error"', () => {
      expectTypeOf<TestSubject>().extract<'es2022.error'>().toBeString()
    })

    it('should extract "es2022.full"', () => {
      expectTypeOf<TestSubject>().extract<'es2022.full'>().toBeString()
    })

    it('should extract "es2022.intl"', () => {
      expectTypeOf<TestSubject>().extract<'es2022.intl'>().toBeString()
    })

    it('should extract "esnext.array"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.array'>().toBeString()
    })

    it('should extract "esnext.asynciterable"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.asynciterable'>().toBeString()
    })

    it('should extract "esnext.bigint"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.bigint'>().toBeString()
    })

    it('should extract "esnext.intl"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.intl'>().toBeString()
    })

    it('should extract "esnext.promise"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.promise'>().toBeString()
    })

    it('should extract "esnext.string"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.string'>().toBeString()
    })

    it('should extract "esnext.symbol"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.symbol'>().toBeString()
    })

    it('should extract "esnext.weakref"', () => {
      expectTypeOf<TestSubject>().extract<'esnext.weakref'>().toBeString()
    })

    it('should extract "esnext"', () => {
      expectTypeOf<TestSubject>().extract<'esnext'>().toBeString()
    })

    it('should extract "scripthost"', () => {
      expectTypeOf<TestSubject>().extract<'scripthost'>().toBeString()
    })

    it('should extract "webworker.importscripts"', () => {
      expectTypeOf<TestSubject>()
        .extract<'webworker.importscripts'>()
        .toBeString()
    })

    it('should extract "webworker.iterable"', () => {
      expectTypeOf<TestSubject>().extract<'webworker.iterable'>().toBeString()
    })

    it('should extract "webworker"', () => {
      expectTypeOf<TestSubject>().extract<'webworker'>().toBeString()
    })
  })
})
