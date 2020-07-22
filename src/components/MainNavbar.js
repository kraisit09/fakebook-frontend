import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Dropdown } from 'antd'
import { FacebookFilled, UserOutlined, DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/">ดูรายชื่อเพื่อน</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">เปลี่ยนรหัสผ่าน</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/login">ออกจากระบบ</Link>
    </Menu.Item>
  </Menu>
)

const { Header, Content, Footer } = Layout

export default class MainNavbar extends Component {
  render() {
    return (
      <div>
        <Header className="nav-header-fixed">
          <div className="pull-left">
            <FacebookFilled className="logo-s"></FacebookFilled>
          </div>
          <div className="pull-right">
            <Link to="/profile">
              <span className="nav-profile">Kraisit Chedcharoenrut</span>
              <Avatar
                size="large"
                src="https://i.pinimg.com/originals/2e/91/6c/2e916ccefdf9467e5aa90747f3e54d89.jpg"
              ></Avatar>
            </Link>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="nav-profile" onClick={(e) => e.preventDefault()}>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        {/* <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
      </div>
    )
  }
}
