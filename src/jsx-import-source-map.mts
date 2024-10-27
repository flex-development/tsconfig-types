/**
 * @file JsxImportSourceMap
 * @module tsconfig-types/JsxImportSourceMap
 */

/**
 * Registry of JSX import sources.
 *
 * @see https://www.typescriptlang.org/tsconfig/#jsxImportSource
 */
interface JsxImportSourceMap {
  preact: 'preact'
  react: 'react'
}

export type { JsxImportSourceMap as default }
