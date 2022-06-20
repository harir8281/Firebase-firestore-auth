import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AuthForm from './AuthForm'

const AuthContent = ({isLogin,onAuthenticate}) => {

  function userDataHandler(userData)
  {
    const email=userData.email
    const password=userData.password

    onAuthenticate(email,password)
  }
  return (
    <View style={styles.container}>
        <AuthForm isLogin={isLogin} onSubmit={userDataHandler}/>
    </View>
  )
}

export default AuthContent

const styles = StyleSheet.create({
    container:{
        padding:15,
        flex:1
    }
})