import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C67AF",
    width: 150,
    borderRadius: 12,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 14,
  },
});
