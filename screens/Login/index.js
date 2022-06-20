import React from "react";
import AuthContent from "../../componnets/Auth/AuthContent";

import { login } from "../../util/auth";

const Login = () => {

  async function loginHandler(email,password)
  {
    await login(email,password )
  }

  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
};

export default Login;

