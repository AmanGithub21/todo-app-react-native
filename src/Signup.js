import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
      const res = await axios.post("http://192.168.29.137:8080/register", {
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
        autoFocus
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

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
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
  signupButtonContainer: {
    backgroundColor: "rgb(240, 240, 240)",
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 30,
  },
  signupButton: {
    padding: 10,
    fontSize: 18,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Signup;
