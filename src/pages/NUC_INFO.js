import React from 'react';
import {Menu} from "antd";
import {Link} from "umi";
import FloatButtom from "./FloatButtom";

function NUC_INFO() {
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
      <div>NUC_INFO</div>
      <FloatButtom/>
    </div>
  );
}

export default NUC_INFO;
