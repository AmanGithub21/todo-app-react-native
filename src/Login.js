import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";

import { styles } from "../styles/loginStyles";
import { env } from "../env";

function Login({ toggleLoggedIn, setUserInfo }) {
  const [username, setUsername] = useState("aman");
  const [password, setPassword] = useState("aman");

  const handleSubmit = async () => {
    try {
      // if field empty check
      var res = await axios.post(env.api_url + "/login", {
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

  const handleForgotPassword = () => {
    console.log("forgot password!?");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.inputHeading}>Username</Text>
      <TextInput
        style={styles.inputText}
        placeholder="write your username"
        placeholderTextColor="gray"
        value={username}
        onChangeText={(t) => setUsername(t)}
      />

      <Text style={styles.inputHeading}>Password</Text>
      <TextInput
        style={styles.inputText}
        secureTextEntry={true}
        placeholder="your password please"
        placeholderTextColor="gray"
        value={password}
        onChangeText={(t) => setPassword(t)}
      />

      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={handleSubmit}
      >
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleForgotPassword}
        style={styles.forgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
