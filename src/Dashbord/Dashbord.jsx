import React from 'react';
import { Layout, Menu, theme } from 'antd';
import DashbordProfile from './DashbordProfile';
import CustomItem from '../router/CustomRouterAntd';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;



const Dashbord = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
      style={{background:'white'}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu style={{background:'white',position:'sticky',top:'0'}} mode="inline" defaultSelectedKeys={['4']} items={CustomItem} />
      </Sider>
      <Layout>
        <Header style={{display:'flex',position:'sticky',top:'0',justifyContent:'space-between',background:'white',alignItems:'center'}}>
            <h4 className='font-bold text-2xl'>Welcome to Dashbord</h4>
            <DashbordProfile/>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashbord;