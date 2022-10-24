import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.button}>
        <Button title={"Back"} />
      </View>
      <View style={styles.title}>
        <Text style={styles.title}>Form</Text>
      </View>
    </View>
  );
}
export default Header;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 20,
    paddingTop: 30,
  },
  button: {
    flex: 1,
  },
  title: {
    flex: 4,
    marginLeft: 70,
    // backgroundColor: "blue",
    paddingVertical: 3,
  },
});
