/**
 * @file Enums - NewLineKind
 * @module tsconfig-types/enums/NewLineKind
 */

import type { NewLine } from '#src/types'

/**
 * End of line sequence to be used when emitting files.
 *
 * @see https://www.typescriptlang.org/tsconfig#newLine
 *
 * @enum {Lowercase<NewLine>}
 */
enum NewLineKind {
  CarriageReturnLineFeed = 'crlf',
  LineFeed = 'lf'
}

export default NewLineKind
