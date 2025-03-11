/** @type {import('@jest/types').Config.ProjectConfig} */
module.exports = {
  preset: "jest-expo",
  setupFiles: ["<rootDir>/test/setup.ts"],
  transformIgnorePatterns: ["<rootDir>/../../node_modules/(?!(react-native|@react-native)/)"],
  modulePaths: ["<rootDir>/node_modules", "<rootDir>/../../node_modules"],
}
