import React, { useState } from 'react';
import FloatButtom from './FloatButtom';
import { Button, Card, Input, Space, Table, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { useEffect, useRef } from 'react';
import { processCode } from '../processCode';

const answer1 = [
  'zyy',
  'zyz',
  'zjy',
  'lbjy',
  'zyxy',
  'lbq',
  'zyyx',
  'lq',
  'zyyy',
  'zqy',
];
const answer2 = [
  'lbxy',
  'zyjy',
  'zjyy',
  'lbyy',
  'pth',
  'zq',
  'lby',
  'lyyy',
  'rzx',
  'zxy',
];
const answer3 = [
  'lbj',
  'zyx',
  'wxy',
  'zzy',
  'lqy',
  'lbz',
  'zyj',
  'zjyyy',
  'lyy',
  'jyyy',
];
const answer4 = [
  'lqyy',
  'lb',
  'zyq',
  'zqyy',
  'jyy',
  'yj',
  'zyyy',
  'lqz',
  'jy',
  'zj',
];

const { Search } = Input;
const codeAccumulator = [];

function Contact() {
  const [codeInput, setCodeInput] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  let time = 0;

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
    console.log(time);
    processCode(tag);
    time++;
  };

  const tagChild = tags.map(forMap);

  function handleClick() {
    time = 0;
    tags.map(processMap);
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
      <Button onClick={handleClick}>测试</Button>
      <FloatButtom />
    </div>
  );
}

export default Contact;
