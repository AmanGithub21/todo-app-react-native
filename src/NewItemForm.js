import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function NewItemForm({ additem }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 30,
      borderColor: "rgb(240,240,240)",
      borderWidth: 3,
      padding: 10,
      borderRadius: 10,
      marginRight: 20,
      marginLeft: 20,
    },
    inputText: {
      width: "75%",
    },
    addButton: {
      backgroundColor: "rgb(240,240,240)",
      borderRadius: 30,
      padding: 15,
    },
  });
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
