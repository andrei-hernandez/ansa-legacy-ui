import React from "react"
import { NextPage } from "next"
import { Card } from "antd"
import { LoginForm } from "@/components/Auth/LoginForm"
import { signIn } from "next-auth/react"

import { ILoginCredentials } from "@/types/Auth"

const LoginPage: NextPage = (): JSX.Element => {

  const handleLogin = (values: ILoginCredentials): void => {
    signIn("credentials", {
      login: values.login,
      password: values.password,
      redirect: false
    })
  }

  return (
    <div className="login-page">
      <Card
        style={{ width: 450 }}
        headStyle={{ textAlign: "center", fontSize: "1.5rem" }}
        title="Iniciar sesión"
        className="login-card-container">
        <LoginForm
          onSubmit={handleLogin} />
      </Card>
    </div>
  )
}

export default LoginPage
