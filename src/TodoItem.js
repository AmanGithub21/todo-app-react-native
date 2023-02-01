import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";

function TodoItem({ text, id, deleteitem, handleToggle, isCompleted }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.inputText}>
          {/* <Text>Done! </Text> */}
          <Checkbox
            color={"lightgray"}
            value={isCompleted}
            onValueChange={() => handleToggle(id, isCompleted)}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.textItem,
            { textDecorationLine: `${isCompleted ? "line-through" : "none"}` },
          ]}
          disabled={isCompleted}
        >
          {text}
        </Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.deleteText}
          onPress={() => deleteitem(id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "rgb(240,240,240)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 18,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  inputText: { marginRight: 20 },
  right: {
    borderRadius: 10,
  },
  textItem: {},
  deleteText: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: "white",
  },
});

export default TodoItem;
