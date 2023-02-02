import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View, ScrollView } from "react-native";
import axios from "axios";

import TodoItem from "./TodoItem";
import NewItemForm from "./NewItemForm";
import { styles } from "../styles/todoStyles";
import { env } from "../env";

function Todo({ userInfo, logout }) {
  const [itemlist, setItemlist] = useState(userInfo.todos);

  const additem = async (text) => {
    const res = await axios.post(env.api_url + "/additem", {
      userid: userInfo.userid,
      text,
    });
    if (res.data.status == 200) {
      setItemlist(res.data.todos);
    } else {
      Alert.alert("i say", "item can not be added");
    }
  };

  const deleteitem = async (todoid) => {
    const res = await axios.post(env.api_url + "/deleteitem", {
      userid: userInfo.userid,
      todoid,
    });
    if (res.data.status == 200) {
      setItemlist(res.data.todos);
    } else {
      Alert.alert("i say", "item can not be deleted");
    }
  };

  const handleToggle = async (id, isCompleted) => {
    const res = await axios.post(env.api_url + "/updateitem", {
      id,
      isCompleted,
    });
    setItemlist(res.data.todos);
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

export default Todo;
