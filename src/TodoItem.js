import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet, Button } from "react-native";
import Checkbox from "expo-checkbox";

function TodoItem({ text, id, deleteitem }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const styles = StyleSheet.create({
    container: { margin: 10 },
    InputText: {},
    textItem: {},
    deleteText: {},
  });
  console.log({ text, id, deleteitem });
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.InputText}
        onPress={() => setIsCompleted(!isCompleted)}
      >
        {/* <Text>Done! </Text> */}
        <Checkbox value={isCompleted} />
      </Pressable>
      <Text
        style={[
          styles.textItem,
          { textDecorationLine: `${isCompleted ? "line-through" : "none"}` },
        ]}
        disabled={isCompleted}
      >
        {text}
      </Text>
      <Button
        style={styles.deleteText}
        title="Delete"
        onPress={() => deleteitem(id)}
      />
    </View>
  );
}

export default TodoItem;
