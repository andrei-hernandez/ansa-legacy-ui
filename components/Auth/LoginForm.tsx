import React, { FunctionComponent } from "react"
import { Form, Input, Button, Row, Col, Typography } from "antd"
import Link from "next/link"

export const LoginForm: FunctionComponent = (): JSX.Element => {

  const [form] = Form.useForm()

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
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button">
            Iniciar sesión
          </Button>
        </Col>
        <Col span={24}>
          <Typography.Paragraph className="change-auth-mode-text">
            ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
          </Typography.Paragraph>
        </Col>
      </Row>
    </Form>
  )
}
