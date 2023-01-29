import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function NewItemForm({ additem }) {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    setText("");
    additem(text);
  };
  return (
    <View>
      <TextInput
        placeholder="add new item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title="+" onPress={handleSubmit} />
    </View>
  );
}

export default NewItemForm;
