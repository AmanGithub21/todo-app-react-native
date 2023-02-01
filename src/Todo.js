import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import axios from "axios";

import TodoItem from "./TodoItem";
import NewItemForm from "./NewItemForm";

function Todo({ userInfo, logout }) {
  const [itemlist, setItemlist] = useState(userInfo.todos);

  const additem = async (text) => {
    console.log("my text to be added", text);
    const res = await axios.post("http://192.168.29.137:8080/additem", {
      userid: userInfo.userid,
      text,
    });
    // console.log("res.data", res.data);
    if (res.data.status == 200) {
      setItemlist(res.data.todos);
    } else {
      Alert.alert("i say", "item can not be added");
    }
  };

  const deleteitem = async (todoid) => {
    // console.log("todoid", todoid);
    const res = await axios.post("http://192.168.29.137:8080/deleteitem", {
      userid: userInfo.userid,
      todoid,
    });
    // console.log("in deleteitem res.data", res.data);
    if (res.data.status == 200) {
      setItemlist(res.data.todos);
    } else {
      Alert.alert("i say", "item can not be deleted");
    }
  };

  const handleToggle = async (id, isCompleted) => {
    const res = await axios.post("http://192.168.29.137:8080/updateitem", {
      id,
      isCompleted,
    });
    // console.log("habdletoggle res", res);
    setItemlist(res.data.todos);
    console.log("kalsjdflksdjf", itemlist);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.heading}>Todo List</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
      <NewItemForm additem={additem} />
      {itemlist.map(({ text, _id, isCompleted }) => (
        <TodoItem
          key={_id}
          text={text}
          id={_id}
          isCompleted={isCompleted}
          deleteitem={deleteitem}
          handleToggle={handleToggle}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "rgb(240,240,240)",
    fontSize: 30,
    borderRadius: 10,
    padding: 12,
  },
});

export default Todo;
