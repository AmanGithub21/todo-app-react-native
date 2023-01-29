import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import TodoItem from "./TodoItem";
import NewItemForm from "./NewItemForm";

function Todo() {
  const [itemlist, setItemlist] = useState([
    { text: "qwertyuiop", id: "2" },
    { text: "asdfghjkl", id: "4" },
    { text: "zxcvbnm", id: "6" },
  ]);

  const additem = (text) => {
    if (!text) {
      console.log("called");
      return Alert.alert(
        "i aman porwal say",
        "you are not allowed to have empty todo",
        [{ text: "ok", onPress: () => console.log("understood") }]
      );
    }
    setItemlist([...itemlist, { text, id: Math.floor(Math.random() * 1000) }]);
  };

  const deleteitem = (id) => {
    setItemlist(itemlist.filter((item) => item.id != id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <NewItemForm additem={additem} />
      {itemlist.map(({ text, id }) => {
        return (
          <TodoItem key={id} text={text} id={id} deleteitem={deleteitem} />
        );
      })}
      {/* <TodoItem text="this is another text" id="5" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "pink",
  },
});

export default Todo;
