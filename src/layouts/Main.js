import React, { Component } from 'react'
import MainNavbar from '../components/MainNavbar'
import { Layout, Row, Col } from 'antd'
import PostBox from '../components/PostBox'
import MainFooter from '../components/MainFooter'
import FeedBox from '../components/FeedBox'
import CommentBox from '../components/CommentBox'

const { Header, Content, Footer } = Layout

export default class Main extends Component {
  render() {
    return (
      <div>
        <p>Main Page</p>
        <Layout className="layout">
          <MainNavbar></MainNavbar>
          <Content className="site-layout">
            <div className="site-layout-background">
              <Row justify="center">
                <Col span={6}></Col>
                <Col span={12}>
                  <PostBox></PostBox>
                  <FeedBox></FeedBox>
                  <CommentBox></CommentBox>
                </Col>
                <Col span={6}></Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </div>
    )
  }
}
