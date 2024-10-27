/**
 * @file NewLineMap
 * @module tsconfig-types/NewLineMap
 */

/**
 * Registry of options to specify the end of line sequence to be used when
 * emitting files.
 *
 * @see https://www.typescriptlang.org/tsconfig/#newLine
 */
interface NewLineMap {
  crlf: 'crlf'
  lf: 'lf'
}

export type { NewLineMap as default }
