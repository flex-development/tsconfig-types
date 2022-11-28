/**
 * @file Type Definitions - Module
 * @module tsconfig-types/types/Module
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * Module systems.
 *
 * @see https://www.typescriptlang.org/tsconfig#module
 */
type Module = OrLowercase<
  | 'AMD'
  | 'CommonJS'
  | 'ES6'
  | 'ES2015'
  | 'ES2020'
  | 'ES2022'
  | 'ESNext'
  | 'Node16'
  | 'NodeNext'
  | 'None'
  | 'System'
  | 'UMD'
>

export type { Module as default }
