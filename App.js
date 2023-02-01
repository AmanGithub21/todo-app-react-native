import React, { useState } from "react";
import { View, Text } from "react-native";

import Login from "./src/Login";
import Signup from "./src/Signup";
import Todo from "./src/Todo";
import useToggle from "./hooks/useToggle";

export default function App() {
  const [isLoggedIn, toggleLoggedIn] = useToggle(false);
  const [userInfo, setUserInfo] = useState({
    userid: "",
    todos: [{ text: "this is sample text", isCompleted: true }],
  });

  const logout = () => {
    toggleLoggedIn();
    setUserInfo({ userid: "", todos: [] });
  };
  return (
    <View>
      {isLoggedIn ? (
        <Todo userInfo={userInfo} logout={logout} />
      ) : (
        <View>
          <Login toggleLoggedIn={toggleLoggedIn} setUserInfo={setUserInfo} />
          <Text
            style={{
              fontSize: 30,
              marginTop: 30,
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
    </View>
  );
}
