import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import { FacebookFilled, UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Row justify="center" style={{ marginTop: '50px' }}>
          <Col span={12}>
            <Row justify="center">
              <Col>
                <FacebookFilled className="logo-m" />
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={16}>
                <h4>Username</h4>
                <Input prefix={<UserOutlined />}></Input>
                <h4>Password</h4>
                <Input.Password prefix={<KeyOutlined />}></Input.Password>
                <h4>Confirm Password</h4>
                <Input.Password prefix={<KeyOutlined />}></Input.Password>
                <h4>Name</h4>
                <Input prefix={<UserOutlined />}></Input>
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col>
                <Button type="primary">
                  <Link to="../views/Signup.js">Signup</Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
