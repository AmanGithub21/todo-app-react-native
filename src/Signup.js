import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles/signupStyles";
import { env } from "../env";
function Signup({ toggleLoggedIn, setUserInfo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");

  const handleSubmit = async () => {
    try {
      if (
        username == "" ||
        password == "" ||
        securityAnswer == "" ||
        securityQuestion == ""
      )
        return Alert.alert("Todo List says", "No empty field");
      const res = await axios.post(env.api_url + "/register", {
        username,
        password,
        securityquestion: securityQuestion,
        securityanswer: securityAnswer,
      });
      if (res.data.status == 200) {
        setUserInfo({ userid: res.data.userid, todos: res.data.todos });
        return toggleLoggedIn();
      } else return Alert.alert("Todo List says", res.data.message);
    } catch (error) {
      console.log("error in submitting signup", { ...error });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <Text style={styles.inputHeading}>Username</Text>
      <TextInput
        style={styles.inputText}
        placeholder="foo.is.object"
        placeholderTextColor="gray"
        value={username}
        onChangeText={(t) => setUsername(t)}
      />

      <Text style={styles.inputHeading}>Password</Text>
      <TextInput
        style={styles.inputText}
        secureTextEntry={true}
        placeholder="mysecretpass@123"
        placeholderTextColor="gray"
        value={password}
        onChangeText={(t) => setPassword(t)}
      />

      <Text style={styles.inputHeading}>Security Question</Text>
      <TextInput
        style={styles.inputText}
        placeholder="What is your pet name?"
        placeholderTextColor="gray"
        value={securityQuestion}
        onChangeText={(t) => setSecurityQuestion(t)}
      />

      <Text style={styles.inputHeading}>Security Answer</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Mike"
        placeholderTextColor="gray"
        value={securityAnswer}
        onChangeText={(t) => setSecurityAnswer(t)}
      />

      <TouchableOpacity
        style={styles.signupButtonContainer}
        onPress={handleSubmit}
      >
        <Text style={styles.signupButton}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
