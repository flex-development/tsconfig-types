/**
 * @file Type Definitions - ModuleResolution
 * @module tsconfig-types/types/ModuleResolution
 */

import type { OrLowercase } from '@flex-development/tutils'

/**
 * Module resolution strategies.
 *
 * @see https://www.typescriptlang.org/tsconfig#moduleResolution
 */
type ModuleResolution = OrLowercase<
  'Bundler' | 'Classic' | 'Node' | 'Node10' | 'Node16' | 'NodeNext'
>

export type { ModuleResolution as default }
