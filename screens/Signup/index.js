import React from "react";
import { createUser } from "../../util/auth";

import AuthContent from "../../componnets/Auth/AuthContent";

const Signup = () => {

async function signUpHandler(email,password)
{
  await createUser(email,password)
}

  return <AuthContent isLogin={false} onAuthenticate={signUpHandler}/>;
};

export default Signup;
