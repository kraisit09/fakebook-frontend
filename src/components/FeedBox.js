import React, { Component } from 'react'
import { Card, Avatar, Row, Col, Divider } from 'antd'
import { CommentOutlined } from '@ant-design/icons'

const ava1 =
  'https://i.pinimg.com/originals/2e/91/6c/2e916ccefdf9467e5aa90747f3e54d89.jpg'

export default class FeedBox extends Component {
  render() {
    return (
      <div>
        <Card style={{ margin: '10px' }}>
          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <Avatar size="large" src={ava1}></Avatar>
          </div>
          <div style={{ display: 'inline-block', marginLeft: '10px' }}>
            <div style={{ color: '#18a1fb', fontWeight: 'bold' }}>
              Kraisit.ch
            </div>
            <div style={{ fontSize: '12px' }}>3 ชม. ที่แล้ว</div>
          </div>
          <div style={{ margin: '10px' }}>
            <h3>PostData</h3>
          </div>
          <img style={{ width: '100%' }} alt="" src={ava1} />
        </Card>
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
