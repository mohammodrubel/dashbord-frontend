import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { currentToken, logout } from '../redux/Featchers/Auth/AuthSlice';

function DashbordProfile() {
  const token = useSelector(currentToken);
const dispatch = useDispatch();

const logoutSystem = () => {
  dispatch(logout());
};

const items = [
  token
    ? {
        label: 'Logout',
        key: '0',
        onClick: () => logoutSystem(),
      }
    : {
        label: 'Login',
        key: '0',
      },
  {
    label: 'Change Password',
    key: '1',
  },
];
  
  return (
    <div>
        <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <UserOutlined style={{fontSize:'25px'}} />
      </Space>
    </a>
  </Dropdown>
    </div>
  )
}

export default DashbordProfile