import React, { useState } from 'react';
import FloatButtom from './FloatButtom';
import { Card, Input, Space, Table } from 'antd';

const answer1 = ['pth'];
const answer2 = ['wxy'];
const answer3 = ['lb'];
const answer4 = ['rzx'];

const { Search } = Input;
const codeAccumulator = [];

function accumulate(code) {
  codeAccumulator.push(code);
}

function Contact() {
  const [codeInput, setCodeInput] = useState(null);

  const onSearch = (value) => {
    console.log(value);
    setCodeInput(value);
    accumulate(value);
  };

  return (
    <div>
      <Search
        placeholder="输入代码内容"
        allowClear
        enterButton="提交"
        size="large"
        onSearch={onSearch}
      />
      <div style={{ height: 8 }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        {codeInput && (
          <Card title="codeInput">
            <div style={{ wordWrap: 'break-word' }}>{codeInput}</div>
          </Card>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        {codeInput && (
          <Card title="codeAccumulator">
            {/*<div style={{wordWrap: 'break-word'}}>{codeAccumulator}</div>*/}
            {codeAccumulator.map((code, index) => (
              <div key={index} style={{ wordWrap: 'break-word' }}>
                {code}
              </div>
            ))}
          </Card>
        )}
      </div>
      <FloatButtom />
    </div>
  );
}

export default Contact;
