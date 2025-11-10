import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function NewTask(){
  const [newData, setNewData] = useState({
    name: "",
    tag: "",
    priority: "",
    done: false,
    id: 0,
  });

  return (
    <View style={{ display: "flex", flexDirection: "column", height: "100%", padding: 10 }}>
      <Text variant="headlineLarge" style={{ marginBottom: 10, textAlign: "center", fontWeight: "bold", color: "#333" }} >New Task</Text>
      <TextInput
        label="Titulo"
        value={newData.name}
        onChange={(text) => setNewData({...newData, name: text.nativeEvent.text })}
        mode="outlined"
      />
      <Button 
        buttonColor="#8be0b9"
        onPress={() => console.log(newData)}
        textColor="white"
        mode="elevated"
        style={{
          marginTop: 10,
          borderRadius: 6,
          width: "100%",
          position: "absolute",
          bottom: 30,
          left: 10,
          right: 10,
        }}
      >
        Guardar
      </Button>
    </View>
  )
}