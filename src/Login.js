import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
        autoFocus
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
  inputHeading: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "bold",
  },
  inputText: { fontSize: 20 },
  loginButtonContainer: {
    backgroundColor: "rgb(240, 240, 240)",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 8,
  },
  loginButton: {
    padding: 10,
    fontSize: 18,
    marginLeft: "auto",
    marginRight: "auto",
  },
  forgotPassword: {},
  forgotPasswordText: {
    padding: 5,
    textDecorationLine: "underline",
    // backgroundColor: "rgb(240,240,240)",
  },
});

export default Login;
