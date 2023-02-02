import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles/newItemFormStyles";
function NewItemForm({ additem }) {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    if (text == "")
      return Alert.alert("Todo App says", "todo can not be empty", [
        { text: "ok" },
      ]);
    additem(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Add new item"
        placeholderTextColor={"gray"}
        value={text}
        onChangeText={(t) => setText(t)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text> + </Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewItemForm;
