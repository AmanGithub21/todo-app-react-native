import React, { useState } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Login from "./src/Login";
import Signup from "./src/Signup";
import Todo from "./src/Todo";
import useToggle from "./hooks/useToggle";

export default function App() {
  const [isLoggedIn, toggleLoggedIn] = useToggle(false);
  const [userInfo, setUserInfo] = useState({
    userid: "",
    todos: [],
  });

  const logout = () => {
    toggleLoggedIn();
    setUserInfo({ userid: "", todos: [] });
  };

  return (
    <KeyboardAwareScrollView>
      {isLoggedIn ? (
        <Todo userInfo={userInfo} logout={logout} />
      ) : (
        <View>
          <Login toggleLoggedIn={toggleLoggedIn} setUserInfo={setUserInfo} />
          <Text
            style={{
              fontSize: 30,
              marginTop: 30,
              fontWeight: "bold",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            {" "}
            OR{" "}
          </Text>
          <Signup toggleLoggedIn={toggleLoggedIn} setUserInfo={setUserInfo} />
        </View>
      )}
    </KeyboardAwareScrollView>
  );
}
