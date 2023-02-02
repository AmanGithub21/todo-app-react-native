import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "rgb(240,240,240)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 18,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  inputText: { marginRight: 20 },
  right: {
    borderRadius: 10,
  },
  textItem: {},
  deleteText: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: "white",
  },
});
