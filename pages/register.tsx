import React from 'react'
import { NextPage } from 'next'
import { Card } from 'antd'
import { RegisterForm } from '@/components/Auth/RegisterForm'

const RegisterPage: NextPage = (): JSX.Element => {
  return (
    <div className="login-page">
      <Card
        style={{ width: 450 }}
        headStyle={{ textAlign: 'center', fontSize: '1.5rem' }}
        title="Registrarse"
        className="login-card-container">
        <RegisterForm />
      </Card>
    </div>
  )
}

export default RegisterPage
