import { SectionSkeleton } from '@/components/shared/SectionSkeleton'
import { Button, Col, Form, Input, Row } from 'antd'
import React, { FunctionComponent } from 'react'

export const ContactForm: FunctionComponent = (): JSX.Element => {
  const [form] = Form.useForm()

  return (
    <SectionSkeleton title="Contact Us">
      <Form form={form} layout="vertical">
        <Row className="contact-form-container" justify="center">
          <Col xxl={14} xs={24}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name' }]}>
              <Input
                type="text"
                size="large"
                autoComplete="name" />
            </Form.Item>
          </Col>
          <Col xxl={14} xs={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email' }]}>
              <Input
                type="text"
                size="large"
                autoComplete="email" />
            </Form.Item>
          </Col>
          <Col xxl={14} xs={24}>
            <Form.Item
              name="message"
              label="Subject"
              rules={[{ required: true, message: 'Please input your message subject' }]}>
              <Input
                type="text"
                size="large"
                autoComplete="off" />
            </Form.Item>
          </Col>
          <Col xxl={14} xs={24}>
            <Form.Item
              name="messageDetails"
              label="Message">
              <Input.TextArea autoSize={{ minRows: 5, maxRows: 15 }} />
            </Form.Item>
          </Col>
          <Col xxl={14} xs={24}>
            <Button type="primary" size="large">Submit</Button>
          </Col>
        </Row>
      </Form>
    </SectionSkeleton>
  )
}
