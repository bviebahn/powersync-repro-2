import { colors } from "@/theme"
import { BottomSheetFlashList } from "@gorhom/bottom-sheet"
import { Check } from "lucide-react-native"
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native"
import Avatar from "./Avatar"

const styles = StyleSheet.create({
  activityIndicator: { marginVertical: 32 },
  itemLabel: { fontSize: 16, marginHorizontal: 6, marginLeft: 8 },
  itemLabelSelected: {
    fontWeight: "600",
  },
  label: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  selectorItem: {
    alignItems: "center",
    borderBottomColor: colors.palette.neutral300,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    paddingVertical: 12,
  },
})

export function ListSelectorItem({
  onPress,
  label,
  isSelected,
  isLoading = false,
}: {
  onPress: () => void
  label: string
  isSelected: boolean
  isLoading?: boolean
}) {
  return (
    <Pressable onPress={onPress} style={styles.selectorItem}>
      <View style={styles.label}>
        <Avatar name={label || "-"} size="small" />
        <Text style={[styles.itemLabel, isSelected ? styles.itemLabelSelected : undefined]}>
          {label}
        </Text>
      </View>
      {isLoading ? <ActivityIndicator /> : isSelected && <Check size={20} />}
    </Pressable>
  )
}

function ListSelector<T>({
  data,
  keyExtractor,
  renderItem,
  isLoading = false,
  extraData,
}: {
  data: T[]
  keyExtractor: (item: T) => string
  renderItem: (info: { item: T }) => React.ReactElement
  isLoading?: boolean
  extraData?: any
}) {
  return (
    <BottomSheetFlashList
      data={data}
      renderItem={renderItem}
      //   ListHeaderComponent={
      //     <View style={styles.searchBarWrapper}>
      //       <SearchBar value={query} onChangeText={onChangeQuery} />
      //     </View>
      //   }
      keyExtractor={keyExtractor}
      extraData={extraData}
      estimatedItemSize={100}
      ListFooterComponent={
        isLoading ? <ActivityIndicator style={styles.activityIndicator} /> : undefined
      }
    />
  )
}

export default ListSelector
