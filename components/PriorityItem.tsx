import { Prioritis } from "@/constants/types"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export const PriorityItem = ({ item }:{item: Prioritis}) => {
  const color: string = item === "alta" ? "#ff746c" : item === "media" ? "#ffc400ff" : "#80ef80ff";
  const backgroundColor: string = item === "alta" ? "rgba(255, 116, 108, 0.1)" : item === "media" ? "rgba(255, 238, 140, 0.1)" : "rgba(128, 239, 128, 0.1)";
  return (
    <View style={{...styles.Chip, borderColor: color, borderWidth: 1, backgroundColor: backgroundColor  }}>
      <Text style={{color: color, textTransform: "capitalize" }}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Chip: {
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    borderRadius: 3,
  }
})