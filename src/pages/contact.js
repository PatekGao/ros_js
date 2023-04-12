import React, { useEffect, useRef, useState } from 'react';
import FloatButtom from './FloatButtom';
import { Button, Input, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { processCode } from '../processCode';
import { Column } from '@ant-design/plots';
import { itemsTotal } from '../itemsTotal';

const { Search } = Input;

function Contact() {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  let class1Total,
    class2Total = 0;
  let class1Acc = [];
  let class2Acc = [];
  for (let i = 0; i < 40; i++) {
    class1Acc.push(0);
    class2Acc.push(0);
  }
  const raw = [
    {
      name: itemsTotal[0].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[1].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[2].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[3].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[4].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[5].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[6].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[7].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[8].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[9].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[10].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[11].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[12].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[13].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[14].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[15].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[16].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[17].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[18].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[19].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[20].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[21].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[22].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[23].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[24].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[25].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[26].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[27].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[28].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[29].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[30].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[31].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[32].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[33].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[34].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[35].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[36].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[37].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[38].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[39].content,
      class: 1,
      accuracy: 0,
    },
    {
      name: itemsTotal[0].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[1].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[2].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[3].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[4].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[5].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[6].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[7].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[8].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[9].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[10].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[11].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[12].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[13].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[14].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[15].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[16].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[17].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[18].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[19].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[20].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[21].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[22].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[23].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[24].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[25].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[26].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[27].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[28].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[29].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[30].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[31].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[32].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[33].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[34].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[35].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[36].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[37].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[38].content,
      class: 2,
      accuracy: 0,
    },
    {
      name: itemsTotal[39].content,
      class: 2,
      accuracy: 0,
    },
  ];
  //setData(raw);
  const config = {
    data,
    isGroup: true,
    xField: 'name',
    yField: 'accuracy',
    seriesField: 'class',

    /** 设置颜色 */
    color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    scrollbar: {
      type: 'horizontal',
    },
  };

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };
  const handleInputConfirm = (inputValue) => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
    console.log(tags);
  };
  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span
        key={tag}
        style={{
          display: 'inline-block',
        }}
      >
        {tagElem}
      </span>
    );
  };
  const processMap = (tag) => {
    let tmp_1 = 0;
    let tmp_2 = 40;
    const { classNumber, name, answerSheet } = processCode(tag);
    if (classNumber === '1') {
      class1Total++;
      for (const item of answerSheet) {
        if (item.status === true) {
          class1Acc[tmp_1] = class1Acc[tmp_1] + 1;
        }
        raw[tmp_1].accuracy = class1Acc[tmp_1] / class1Total;
        tmp_1++;
      }
    } else if (classNumber === '2') {
      class2Total++;
      for (const item of answerSheet) {
        if (item.status === true) {
          class2Acc[tmp_2 - 40] = class2Acc[tmp_2 - 40] + 1;
        }
        raw[tmp_2].accuracy = class2Acc[tmp_2 - 40] / class2Total;
        tmp_2++;
      }
    }
    console.log(answerSheet);
    console.log(classNumber);
    console.log(name);
  };

  const tagChild = tags.map(forMap);

  function handleClick() {
    class1Total = 0;
    class2Total = 0;
    tags.map(processMap);
    console.log('class ' + class1Total + ' ' + class2Total);
    console.log(raw);
    setData(raw);
  }

  return (
    <div>
      <Search
        placeholder="输入代码内容"
        allowClear
        enterButton="提交"
        size="large"
        onSearch={handleInputConfirm}
      />
      <div style={{ height: 8 }}></div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              e.target.style = 'display: inline-block';
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200,
          }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      <div style={{ height: 8 }}></div>
      <Button onClick={handleClick}>生成统计</Button>
      <div style={{ height: 8 }}></div>
      <Column {...config} />
      <FloatButtom />
    </div>
  );
}

export default Contact;
