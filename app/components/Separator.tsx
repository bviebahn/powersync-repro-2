import { colors } from "@/theme"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  sectionSeperator: {
    backgroundColor: colors.palette.neutral300,
    height: 1,
    marginVertical: 8,
    width: "100%",
  },
})

function Separator() {
  return <View style={styles.sectionSeperator} />
}

export default Separator
