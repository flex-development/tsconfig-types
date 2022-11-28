/**
 * @file Type Definitions - NewLine
 * @module tsconfig-types/types/NewLine
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * End of line sequence to be used when emitting files.
 *
 * @see https://www.typescriptlang.org/tsconfig#newLine
 */
type NewLine = OrLowercase<'CRLF' | 'LF'>

export type { NewLine as default }
