import { StyleSheet, TextInput } from "react-native";
import React from "react";

const InputComponent = ({
  onChangeText,
  placeholder,
  secureTextEntry,
  onEndEditing,
  value,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onEndEditing={onEndEditing}
      value={value}
    />
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 14,
    borderRadius: 30,
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 15,
    color: "red",
    backgroundColor: "#fafad2",
  },
});
