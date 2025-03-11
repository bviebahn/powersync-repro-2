import { Text, TextProps, View } from "react-native"
import * as Clipboard from "expo-clipboard"

function CopyToClipboardText(props: TextProps) {
  const { children } = props
  const text = children?.toString() || ""

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text)
  }

  return (
    <View>
      <Text {...props} onPress={copyToClipboard} />
    </View>
  )
}

export default CopyToClipboardText
