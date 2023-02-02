import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "../styles/todoItemStyles";

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

export default TodoItem;
