import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native"
import { colors } from "../theme/colors"
import { type WorkItemStatus } from "@/powersync/queries/common"

const commonContainerStyle: ViewStyle = {
  alignSelf: "flex-start",
  borderRadius: 16,
  paddingHorizontal: 10,
  paddingVertical: 8,
  marginLeft: 12,
}

const styles: {
  container: Record<"IN_PROGRESS" | "BLOCKED" | "COMPLETED" | "PENDING", ViewStyle>
  status: TextStyle
} = {
  container: {
    IN_PROGRESS: {
      ...commonContainerStyle,
      backgroundColor: colors.palette.secondary600,
    },
    BLOCKED: {
      ...commonContainerStyle,
      backgroundColor: colors.palette.angry500,
    },
    COMPLETED: {
      ...commonContainerStyle,
      backgroundColor: colors.palette.success,
    },
    PENDING: {
      ...commonContainerStyle,
      backgroundColor: colors.palette.neutral200,
    },
  },
  status: {
    fontSize: 14,
    color: colors.palette.neutral900,
  },
}

function translateWorkItemStatus(status: WorkItemStatus) {
  switch (status) {
    case "IN_PROGRESS":
      return "In Progress"
    case "BLOCKED":
      return "Blocked"
    case "COMPLETED":
      return "Completed"
    case "PENDING":
      return "Pending"
  }
}

function StatusTag({ status, style }: { status: WorkItemStatus; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[styles.container[status], style]}>
      <Text style={styles.status}>{translateWorkItemStatus(status)}</Text>
    </View>
  )
}

export default StatusTag
