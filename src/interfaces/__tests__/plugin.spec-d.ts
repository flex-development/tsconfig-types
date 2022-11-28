/**
 * @file Unit Tests - Plugin
 * @module tsconfig-types/interfaces/interfaces/Plugin
 */

import type TestSubject from '../plugin'

describe('unit:interfaces/Plugin', () => {
  it('should allow empty object', () => {
    assertType<TestSubject>({})
  })

  describe('plugins', () => {
    it('should allow eslint-language-service plugin options', () => {
      assertType<TestSubject>({
        name: 'typescript-eslint-language-service',
        watchDirs: []
      })
    })

    it('should allow graphql plugin options', () => {
      assertType<TestSubject>({
        name: 'ts-graphql-plugin',
        schema: `https://raw.githubusercontent.com/octokit/graphql-schema/master/schema.graphql`,
        tag: 'gql'
      })
    })

    it('should allow sql plugin options', () => {
      assertType<TestSubject>({
        command: 'psql -c',
        cost_pattern: '/\\(cost=\\d+\\.?\\d*\\.\\.(\\d+\\.?\\d*)/',
        error_cost: null,
        info_cost: null,
        mock: '0',
        name: 'ts-sql-plugin',
        schema_command: 'pg',
        tags: {
          and: 'and',
          cond: 'cond',
          ins: 'ins',
          mock: 'mock',
          or: 'or',
          raw: 'raw',
          sql: 'sql',
          upd: 'upd'
        },
        warn_cost: null
      })
    })

    it('should allow styled plugin options', () => {
      assertType<TestSubject>({
        name: 'typescript-styled-plugin',
        tags: ['styled', 'css', 'sty']
      })
    })
  })
})
