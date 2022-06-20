import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState, useeff } from "react";
import { useNavigation } from "@react-navigation/native";

import InputComponent from "../Ui/InputComponent";
import Button from "../Ui/Button";
import FlatButton from "../Ui/FlatButton";

const AuthForm = ({ isLogin, onSubmit }) => {
  const navigation = useNavigation();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [userData, setUserData] = useState({});

  function changeTextHandler(inputType, enteredText) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredText);
        break;
      case "confirmEmail":
        setConfirmEmail(enteredText);
        break;
      case "password":
        setEnteredPassword(enteredText);
        break;
      case "confirmPassword":
        setConfirmPassword(enteredText);
        break;
      default:
    }
  }

  function userDataHandler() {
    setUserData({
      email: enteredEmail,
      emailConfirm: confirmEmail,
      password: enteredPassword,
      passwordConfirm: confirmPassword,
    });
  }

  function submitHandler() {
    setEnteredEmail('')
    setEnteredPassword('')
    setConfirmPassword('')
    setConfirmEmail('')
    onSubmit(userData);
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <InputComponent
          placeholder={"Email"}
          onChangeText={changeTextHandler.bind(this, "email")}
          onEndEditing={userDataHandler}
          value={enteredEmail}
        />
        {!isLogin && (
          <InputComponent
            placeholder={"Confirm your email"}
            onChangeText={changeTextHandler.bind(this, "confirmEmail")}
            onEndEditing={userDataHandler}
            value={confirmEmail}
          />
        )}
        <InputComponent
          placeholder={"password"}
          secureTextEntry={true}
          onChangeText={changeTextHandler.bind(this, "password")}
          onEndEditing={userDataHandler}
          value={enteredPassword}
        />
        {!isLogin && (
          <InputComponent
            placeholder={"confirm your password"}
            secureTextEntry={true}
            onChangeText={changeTextHandler.bind(this, "confirmPassword")}
            onEndEditing={userDataHandler}
            value={confirmPassword}
          />
        )}
        {!isLogin ? (
          <Button label="signup" onPress={submitHandler} />
        ) : (
          <Button label={"Login"} onPress={submitHandler} />
        )}
        {isLogin ? (
          <FlatButton
            buttonText={"Dont have account ? create a new one"}
            onPress={() => {
              navigation.replace("Signup");
            }}
          />
        ) : (
          <FlatButton
            buttonText={"You have account ? Login here"}
            onPress={() => {
              navigation.replace("Login");
            }}
          />
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
