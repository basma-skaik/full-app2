import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const InputField = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C6C6C6",
    paddingHorizontal: 11,
    marginVertical: 15,
  },
  input: {
    flex: 1,
    alignSelf: "center",
    height: "100%",
  },
});
