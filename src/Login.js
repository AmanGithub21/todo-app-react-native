import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

function Login({ toggleLoggedIn, setUserInfo }) {
  const [username, setUsername] = useState("aman");
  const [password, setPassword] = useState("aman");

  const handleSubmit = async () => {
    try {
      // if field empty check
      var res = await axios.post("http://192.168.29.137:8080/login", {
        username,
        password,
      });
      if (res.data.status == 200) {
        setUserInfo({ userid: res.data.userid, todos: res.data.todos });
        return toggleLoggedIn();
      }
      return Alert.alert("site says", res.data.message);
    } catch (error) {
      console.log("error in login submit", { ...error });
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30, margin: 30 }}>Login</Text>
      <Text>Username</Text>
      <TextInput
        placeholder="username"
        placeholderTextColor="gray"
        value={username}
        onChangeText={(t) => setUsername(t)}
        autoFocus
      />

      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={(t) => setPassword(t)}
      />

      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

export default Login;
