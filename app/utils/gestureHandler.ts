// Don't import react-native-gesture-handler on web
// https://reactnavigation.org/docs/drawer-navigator/#installation

// This however is needed at the moment
// https://github.com/software-mansion/react-native-gesture-handler/issues/2402
// eslint-disable-next-line import/no-unresolved -- no idea why this is unresolved, seems to work...
import "setimmediate"
