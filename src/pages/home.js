import React from 'react';
import {Button, Menu} from 'antd';
import {Link} from "umi";
import FloatButtom from "./FloatButtom";

function Home() {
  return (
    <div>
      <Menu mode="horizontal" theme={"dark"}>
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
      <h1>Home</h1>
      <Button type="primary">Click me!</Button>
      <FloatButtom/>
    </div>
  );
}

export default Home;
