import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  PieChartOutlined,
  AreaChartOutlined
} from '@ant-design/icons';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        height= '100%'
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to={'/'}>
            <Button>View Audio</Button>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AreaChartOutlined />}>
          <Link to={'/audioRank'}>
            <Button>Audio Rank</Button>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideBar;
