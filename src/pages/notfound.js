import React from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import FloatButtom from './FloatButtom';

function NotFound() {
  return (
    <div>
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
      <h1>404 Not Found</h1>
      <FloatButtom />
    </div>
  );
}

export default NotFound;
// import { PlusOutlined } from '@ant-design/icons';
// import { Input, Tag } from 'antd';
// import { TweenOneGroup } from 'rc-tween-one';
// import { useEffect, useRef, useState } from 'react';
//
// const NotFound = () => {
//   const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
//   const [inputVisible, setInputVisible] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const inputRef = useRef(null);
//   useEffect(() => {
//     if (inputVisible) {
//       inputRef.current?.focus();
//     }
//   }, [inputVisible]);
//   const handleClose = (removedTag) => {
//     const newTags = tags.filter((tag) => tag !== removedTag);
//     console.log(newTags);
//     setTags(newTags);
//   };
//   const showInput = () => {
//     setInputVisible(true);
//   };
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const handleInputConfirm = () => {
//     if (inputValue && tags.indexOf(inputValue) === -1) {
//       setTags([...tags, inputValue]);
//     }
//     setInputVisible(false);
//     setInputValue('');
//   };
//   const forMap = (tag) => {
//     const tagElem = (
//       <Tag
//         closable
//         onClose={(e) => {
//           e.preventDefault();
//           handleClose(tag);
//         }}
//       >
//         {tag}
//       </Tag>
//     );
//     return (
//       <span
//         key={tag}
//         style={{
//           display: 'inline-block',
//         }}
//       >
//         {tagElem}
//       </span>
//     );
//   };
//   const tagChild = tags.map(forMap);
//   const tagPlusStyle = {
//     borderStyle: 'dashed',
//   };
//   return (
//     <>
//       <div
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         <TweenOneGroup
//           enter={{
//             scale: 0.8,
//             opacity: 0,
//             type: 'from',
//             duration: 100,
//           }}
//           onEnd={(e) => {
//             if (e.type === 'appear' || e.type === 'enter') {
//               e.target.style = 'display: inline-block';
//             }
//           }}
//           leave={{
//             opacity: 0,
//             width: 0,
//             scale: 0,
//             duration: 200,
//           }}
//           appear={false}
//         >
//           {tagChild}
//         </TweenOneGroup>
//       </div>
//       {inputVisible ? (
//         <Input
//           ref={inputRef}
//           type="text"
//           size="small"
//           style={{
//             width: 78,
//           }}
//           value={inputValue}
//           onChange={handleInputChange}
//           onBlur={handleInputConfirm}
//           onPressEnter={handleInputConfirm}
//         />
//       ) : (
//         <Tag onClick={showInput} style={tagPlusStyle}>
//           <PlusOutlined /> New Tag
//         </Tag>
//       )}
//     </>
//   );
// };
// export default NotFound;
