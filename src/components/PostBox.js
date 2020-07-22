import React, { Component } from 'react'
import { Card, Avatar, Row, Col, Input, Button, Divider } from 'antd'
import { PictureOutlined } from '@ant-design/icons'

const { TextArea } = Input

export default class CreatePostBox extends Component {
  render() {
    return (
      <div>
        <Card type="inner" title="Create Post" style={{ margin: '10px' }}>
          <Row justify="start">
            <Col flex={2}>
              <Avatar
                size="large"
                src="https://i.pinimg.com/originals/2e/91/6c/2e916ccefdf9467e5aa90747f3e54d89.jpg"
              ></Avatar>
            </Col>
            <Col flex={22}>
              <TextArea
                rows={4}
                value="WarGreymon is a Dragon Digimon. The strongest dragon warrior whose body is clad in armor of the..."
              />
            </Col>
          </Row>
          <Divider />
          <Button
            type="default"
            size="middle"
            shape="round"
            icon={<PictureOutlined />}
            style={{ fontSize: '12px', backgroundColor: '#FAFAFA' }}
          >
            Photo/Video
          </Button>
        </Card>
      </div>
    )
  }
}
