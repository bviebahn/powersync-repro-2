import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"

const stringToHslColor = (str: string, s: number, l: number): string => {
  let hash = 0
  if (str) {
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }

    const h = hash % 360
    return `hsl(${h}, ${s}%, ${l}%)`
  }
  return ""
}

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(" ")

  return `${(firstName?.[0] || "").toUpperCase()}${(lastName?.[0] || "").toUpperCase()}`
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
})

const SIZES = {
  smallest: { radius: 16, fontSize: 6 },
  small: { radius: 24, fontSize: 10 },
  medium: { radius: 42, fontSize: 16 },
  large: { radius: 64, fontSize: 28 },
}

function Avatar({
  name,
  size,
  style,
}: {
  name: string
  size: "smallest" | "small" | "medium" | "large"
  style?: StyleProp<ViewStyle>
}) {
  const { radius, fontSize } = SIZES[size]
  return (
    <View
      style={[
        styles.container,
        {
          width: radius,
          height: radius,
          backgroundColor: stringToHslColor(name, 40, 50),
        },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize }]} allowFontScaling={false}>
        {getInitials(name)}
      </Text>
    </View>
  )
}

export default Avatar
