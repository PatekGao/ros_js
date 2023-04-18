import React from 'react';
import { Card, FloatButton } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import { history } from 'umi';

function FloatButtom() {
  return (
    <Card>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 24 }}
        icon={<HomeTwoTone />}
        onClick={() => {
          history.push('/');
        }}
      />
    </Card>
  );
}

export default FloatButtom;
