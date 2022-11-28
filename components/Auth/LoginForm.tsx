import React, { FunctionComponent } from 'react'
import { Form, Input, Button, Row, Col, Typography } from 'antd'
import Link from 'next/link'

import { ILoginCredentials } from '@/types/Auth'

interface ILoginFormProps {
  onSubmit: (values: ILoginCredentials) => void
}

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ onSubmit }): JSX.Element => {
  const [form] = Form.useForm()

  const handleSubmit = async (): Promise<void> => {
    await form.validateFields()
    const values: ILoginCredentials = form.getFieldsValue()
    onSubmit(values)
  }

  return (
    <Form
      form={form}
      className="login-card-form"
      layout="vertical"
      initialValues={{ remember: true }}>
      <Row className="login-form">
        <Col span={24}>
          <Form.Item
            label="Nombre de usuario"
            name="login"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={async (): Promise<void> => await handleSubmit()}
            className="login-form-button">
            Iniciar sesión
          </Button>
        </Col>
        <Col span={24}>
          <div className="change-auth-mode-text">
            <Typography.Paragraph>
              ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
            </Typography.Paragraph>
          </div>
        </Col>
      </Row>
    </Form>
  )
}
