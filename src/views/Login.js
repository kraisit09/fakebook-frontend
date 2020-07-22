import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import { FacebookFilled, UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Row justify="center" style={{ marginTop: '200px' }}>
          <Col>
            <Row justify="center">
              <Col span={12}>
                <FacebookFilled className="logo-l" />
              </Col>
              <Col span={12}>
                <h4>Username</h4>
                <Input prefix={<UserOutlined />}></Input>
                <h4>Password</h4>
                <Input.Password prefix={<KeyOutlined />}></Input.Password>
                <br />
                <br />
                <Row justify="center" gutter={8}>
                  <Col span={12}>
                    <Button type="link" block>
                      <Link to="/signup">Signup</Link>
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button type="primary" block>
                      <Link to="/main">Login</Link>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
