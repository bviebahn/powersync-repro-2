import i18n from "i18next"
import type { TOptions } from "i18next"

/**
 * Translates text.
 * @param {string} key - The i18n key.
 * @param {TOptions} options - The i18n options.
 * @returns {string} - The translated text.
 * @example
 * Translations:
 *
 * ```en.ts
 * {
 *  "hello": "Hello, {{name}}!"
 * }
 * ```
 *
 * Usage:
 * ```ts
 * import { translate } from "./i18n"
 *
 * translate("common:ok", { name: "world" })
 * // => "Hello world!"
 * ```
 */
export function translate(key: string, options?: TOptions): string {
  if (i18n.isInitialized) {
    return i18n.t(key, options)
  }
  return key
}
