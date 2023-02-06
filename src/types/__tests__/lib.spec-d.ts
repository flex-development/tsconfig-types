/**
 * @file Type Tests - Lib
 * @module tsconfig-types/types/tests/Lib
 */

import type { JsonValue, OrLowercase } from '@flex-development/tutils'
import type TestSubject from '../lib'

describe('unit:types/Lib', () => {
  it('should be json value', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<JsonValue>()
  })

  it('should extract OrLowercase<"Decorators.Legacy">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'Decorators.Legacy'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"Decorators">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'Decorators'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"DOM.Iterable">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'DOM.Iterable'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"DOM">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'DOM'>>().toBeString()
  })

  it('should extract OrLowercase<"ES5">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES5'>>().toBeString()
  })

  it('should extract OrLowercase<"ES6">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES6'>>().toBeString()
  })

  it('should extract OrLowercase<"ES7">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES7'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2015.Collection">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Collection'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Core">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Core'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Generator">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Generator'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Iterable">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Iterable'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Promise">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Promise'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Proxy">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Proxy'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Reflect">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Reflect'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Symbol.WellKnown">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Symbol.WellKnown'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015.Symbol">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2015.Symbol'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2015">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2015'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2016.Array.Include">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2016.Array.Include'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2016.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2016.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2016">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2016'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2017.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2017.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2017.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2017.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2017.Object">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2017.Object'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2017.SharedMemory">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2017.SharedMemory'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2017.String">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2017.String'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2017.TypedArrays">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2017.TypedArrays'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2017">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2017'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2018.AsyncGenerator">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2018.AsyncGenerator'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2018.AsyncIterable">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2018.AsyncIterable'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2018.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2018.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2018.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2018.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2018.Promise">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2018.Promise'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2018.Regexp">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2018.Regexp'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2018">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2018'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2019.Array">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2019.Array'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2019.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2019.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2019.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2019.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2019.Object">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2019.Object'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2019.String">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2019.String'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2019.Symbol">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2019.Symbol'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2019">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2019'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2020.BigInt">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.BigInt'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.Date">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.Date'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.Number">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.Number'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.Promise">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.Promise'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.SharedMemory">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.SharedMemory'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.String">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.String'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020.Symbol.WellKnown">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2020.Symbol.WellKnown'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2020">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2020'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2021.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2021.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2021.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2021.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2021.Promise">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2021.Promise'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2021.String">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2021.String'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2021.WeakRef">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2021.WeakRef'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2021">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2021'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2022.Array">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.Array'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.Error">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.Error'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.Object">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.Object'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.Regexp">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.Regexp'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.SharedMemory">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.SharedMemory'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022.String">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2022.String'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2022">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2022'>>().toBeString()
  })

  it('should extract OrLowercase<"ES2023.Array">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2023.Array'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2023.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ES2023.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ES2023">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ES2023'>>().toBeString()
  })

  it('should extract OrLowercase<"ESNext.Array">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.Array'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.AsyncIterable">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.AsyncIterable'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.BigInt">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.BigInt'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.Full">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.Full'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.Intl">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.Intl'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.Promise">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.Promise'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.String">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.String'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.Symbol">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.Symbol'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext.WeakRef">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ESNext.WeakRef'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"ESNext">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'ESNext'>>().toBeString()
  })

  it('should extract OrLowercase<"ScriptHost">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'ScriptHost'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"WebWorker.ImportScripts">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'WebWorker.ImportScripts'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"WebWorker.Iterable">', () => {
    expectTypeOf<TestSubject>()
      .extract<OrLowercase<'WebWorker.Iterable'>>()
      .toBeString()
  })

  it('should extract OrLowercase<"WebWorker">', () => {
    expectTypeOf<TestSubject>().extract<OrLowercase<'WebWorker'>>().toBeString()
  })
})
