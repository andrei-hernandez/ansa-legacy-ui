import React from "react"
import { NextPage } from "next"
import { Card } from "antd"
import { LoginForm } from "@/components/Auth/LoginForm"


const LoginPage: NextPage = (): JSX.Element => {

  return (
    <div className="login-page">
      <Card
        style={{ width: 450 }}
        headStyle={{ textAlign: "center", fontSize: "1.5rem" }}
        title="Iniciar sesión"
        className="login-card-container">
        <LoginForm />
      </Card>
    </div>
  )
}

export default LoginPage
