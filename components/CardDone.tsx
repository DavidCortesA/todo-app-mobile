import { Task } from "@/constants/types"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-paper"
import { PriorityItem } from "./PriorityItem"

export const CardDone = ({ item, onDelete, onDone }:{item: Task, onDelete: (id: number) => void, onDone: (id: number) => void}) => {
  return (
    <View style={styles.Card}>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Icon source="close-circle-outline" size={24} color="red" />
      </TouchableOpacity>
      <View style={styles.CardTextContainer}>
        <Text style={styles.CardText}>{item.name}</Text>
        <Text style={styles.CardTag}>{item.tag}</Text>
        <PriorityItem item={item.priotity} />
      </View>
      <TouchableOpacity onPress={() => onDone(item.id)}>
        <Icon source="checkbox-marked" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 15,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    gap: 10,
    opacity: 0.5,
    marginBottom: 10
  },
  CardTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
    gap: 5
  },
  CardText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textDecorationLine: 'line-through',
  },
  CardTag: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
})