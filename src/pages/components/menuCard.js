import { Card, Menu } from 'antd';
import { Link } from 'umi';
import React from 'react';

function MenuCard() {
  return (
    <Card>
      <Menu mode="horizontal" theme={'dark'}>
        <Menu.Item>
          <Link to="/NUC_INFO">NUC_INFO</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">contact</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/notfound">notfound</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/home">home</Link>
        </Menu.Item>
      </Menu>
    </Card>
  );
}

export default MenuCard;
