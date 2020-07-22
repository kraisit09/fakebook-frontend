import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'

export default class CommentBox extends Component {
  render() {
    return (
      <div>
        <Divider />
        <Row justify="center">
          <Col flex={8} style={{ textAlign: 'center' }}>
            {/* <span>
              <LikeOutlined /> ถูกใจ
            </span> */}
          </Col>
          <Col flex={8} style={{ textAlign: 'center' }}>
            <span>
              <CommentOutlined /> แสดงความคิดเห็น
            </span>
          </Col>
          <Col flex={8} style={{ textAlign: 'center' }}>
            {/* <span>
              <ShareAltOutlined /> แชร์
            </span> */}
          </Col>
        </Row>
      </div>
    )
  }
}
