import { ScrollView, View } from "react-native";
import { Divider, FAB } from "react-native-paper";
import { CardUndone } from "@/components/CardUndone";
import { Tasks } from "@/data/Task";
import { Task } from "@/constants/types";
import { CardDone } from "@/components/CardDone";
import { router } from "expo-router";

export default function Index() {
  const onDelete = (id: number) => {
    Tasks.splice(id, 1);
  };
  const onDone = (id: number) => {
    if (Tasks[id].done === false) {
      Tasks[id].done = true;
    } else {
      Tasks[id].done = false;
    }
  };
  return (
    <View style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ScrollView>      
        <View style={{ display: "flex", flexDirection: "column", height: "100%", padding: 10 }}>
          {Tasks?.filter((item: Task) => item.done === false).map((item: Task) => {
            return <CardUndone item={item as Task} onDelete={onDelete} onDone={onDone} key={item.id} />;
          })}
          <Divider bold style={{ marginVertical: 5 }}/>
          {Tasks?.filter((item: Task) => item.done === true).map((item: Task) => {
            return <CardDone item={item as Task} onDelete={onDelete} onDone={onDone} key={item.id} />;
          })}
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        style={{ position: "absolute", bottom: 16, right: 16, backgroundColor: "#8be0b9"}}
        onPress={() => router.push("/new-task")}
      />
    </View>
  );
}
