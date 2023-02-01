import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import useHandleChange from "../hooks/useHandleChange";

function Signup({ toggleLoggedIn, setUserInfo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");

  const handleSubmit = async () => {
    console.log("handlesubmit signup");
    try {
      if (
        username == "" ||
        password == "" ||
        securityAnswer == "" ||
        securityQuestion == ""
      )
        return Alert.alert("i say", "empty field");
      const res = await axios.post("http://192.168.29.137:8080/register", {
        username,
        password,
        securityquestion: securityQuestion,
        securityanswer: securityAnswer,
      });
      console.log(res.data);
      if (res.data.status == 200) {
        setUserInfo({ userid: res.data.userid, todos: res.data.todos });
        return toggleLoggedIn();
      } else return Alert.alert("i say", res.data.message);
    } catch (error) {
      console.log("error in submitting signup", { ...error });
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30, margin: 30 }}>Signup</Text>
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

      <Text>Security Question</Text>
      <TextInput
        placeholder="security question"
        placeholderTextColor="gray"
        value={securityQuestion}
        onChangeText={(t) => setSecurityQuestion(t)}
      />

      <Text>Security Answer</Text>
      <TextInput
        placeholder="security Answer"
        placeholderTextColor="gray"
        value={securityAnswer}
        onChangeText={(t) => setSecurityAnswer(t)}
      />

      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
}

export default Signup;
