import * as Localization from "expo-localization"
import { I18nManager } from "react-native"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import "intl-pluralrules"

// if English isn't your default language, move Translations to the appropriate language file.
import en from "./en.json"
import de from "./de.json"
import es from "./es.json"
import fr from "./fr.json"
import ja from "./ja.json"
import it from "./it.json"

const fallbackLocale = "en-US"

const systemLocales = Localization.getLocales()

const resources = {
  en: { translation: en },
  de: { translation: de },
  es: { translation: es },
  fr: { translation: fr },
  ja: { translation: ja },
  it: { translation: it },
}
const supportedTags = Object.keys(resources)

// Checks to see if the device locale matches any of the supported locales
// Device locale may be more specific and still match (e.g., en-US matches en)
const systemTagMatchesSupportedTags = (deviceTag: string) => {
  const primaryTag = deviceTag.split("-")[0]!
  return supportedTags.includes(primaryTag)
}

const pickSupportedLocale: () => Localization.Locale | undefined = () => {
  return systemLocales.find((locale) => systemTagMatchesSupportedTags(locale.languageTag))
}

const locale = pickSupportedLocale()

export let isRTL = false

// Need to set RTL ASAP to ensure the app is rendered correctly. Waiting for i18n to init is too late.
if (locale?.languageTag && locale?.textDirection === "rtl") {
  I18nManager.allowRTL(true)
  isRTL = true
} else {
  I18nManager.allowRTL(false)
}

export const initI18n = async () => {
  i18n.use(initReactI18next)

  await i18n.init({
    resources,
    lng: locale?.languageTag ?? fallbackLocale,
    fallbackLng: fallbackLocale,
    interpolation: {
      escapeValue: false,
    },
  })

  return i18n
}
