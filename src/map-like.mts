/**
 * @file MapLike
 * @module tsconfig-types/MapLike
 */

/**
 * An object where all values are of the same type.
 *
 * @template {any} T
 *  Value type
 */
interface MapLike<T> {
  [key: string]: T
}

export type { MapLike as default }
