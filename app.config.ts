import { ExpoConfig, ConfigContext } from "expo/config"

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require("ts-node/register")

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 *
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const existingPlugins = config.plugins ?? []

  return {
    ...config,
    plugins: [
      ...existingPlugins,
      [
        "react-native-auth0",
        {
          domain: "EXPO_PUBLIC_AUTH0_DOMAIN",
        },
      ],
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsDownloadToken: "EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN",
        },
      ],
      require("./plugins/withSplashScreen").withSplashScreen,
    ],
  }
}
