import React, { useState } from 'react';
import { Button, Card, Input } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css';

const { Search } = Input;

const itemsFromBackend1 = [
  { id: 'aa', content: 'pth' },
  { id: 'ab', content: 'wxy' },
  { id: 'ac', content: 'lb' },
  { id: 'ad', content: 'rzx' },
  { id: 'ae', content: 'jy' },
  { id: 'af', content: 'zj' },
  { id: 'ag', content: 'lq' },
  { id: 'ah', content: 'yj' },
];
const itemsFromBackend2 = [
  { id: 'ba', content: 'zq' },
  { id: 'bb', content: 'zjy' },
  { id: 'bc', content: 'lqy' },
  { id: 'bd', content: 'zxy' },
  { id: 'be', content: 'zzy' },
  { id: 'bf', content: 'lby' },
  { id: 'bg', content: 'jyy' },
  { id: 'bh', content: 'zy' },
];
const itemsFromBackend3 = [
  { id: 'ca', content: 'zyy' },
  { id: 'cb', content: 'lyy' },
  { id: 'cc', content: 'zyx' },
  { id: 'cd', content: 'zqy' },
  { id: 'ce', content: 'zyj' },
  { id: 'cf', content: 'lqz' },
  { id: 'cg', content: 'zyq' },
  { id: 'ch', content: 'zjyy' },
];
const itemsFromBackend4 = [
  { id: 'da', content: 'lbyy' },
  { id: 'db', content: 'jyyy' },
  { id: 'dc', content: 'zyyy' },
  { id: 'dd', content: 'zyxy' },
  { id: 'de', content: 'zyz' },
  { id: 'df', content: 'zyyx' },
  { id: 'dg', content: 'lyyy' },
  { id: 'dh', content: 'zyjy' },
];
const itemsFromBackend5 = [
  { id: 'ea', content: 'lqyy' },
  { id: 'eb', content: 'zqyy' },
  { id: 'ec', content: 'zjyyy' },
  { id: 'ed', content: 'lbxy' },
  { id: 'ee', content: 'lbz' },
  { id: 'ef', content: 'lbj' },
  { id: 'eg', content: 'lbq' },
  { id: 'eh', content: 'lbjy' },
];
const answer1 = ['eh', 'ca', 'ec', 'ed', 'ad', 'ac', 'ag', 'ef', 'da', 'db'];
const answer2 = ['bh', 'dd', 'ab', 'df', 'ah', 'eg', 'bg', 'ea', 'eb', 'aa'];
const answer3 = ['cf', 'ch', 'dg', 'ee', 'bb', 'bc', 'bf', 'cc', 'ce', 'de'];
const answer4 = ['af', 'cd', 'be', 'dc', 'cg', 'cb', 'ba', 'dh', 'ae', 'bd'];

const columnsFromBackend = {
  ['TODO1']: {
    name: 'TODO1',
    items: itemsFromBackend1,
  },
  ['TODO2']: {
    name: 'TODO2',
    items: itemsFromBackend2,
  },
  ['TODO3']: {
    name: 'TODO3',
    items: itemsFromBackend3,
  },
  ['TODO4']: {
    name: 'TODO4',
    items: itemsFromBackend4,
  },
  ['TODO5']: {
    name: 'TODO5',
    items: itemsFromBackend5,
  },
  ['Unit 1']: {
    name: 'Unit 1',
    items: [],
  },
  ['Unit 2']: {
    name: 'Unit 2',
    items: [],
  },
  ['Unit 3']: {
    name: 'Unit 3',
    items: [],
  },
  ['Unit 4']: {
    name: 'Unit 4',
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const Home = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [finalResult, setFinalResult] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [finalCode, setFinalCode] = useState(null);
  const [name, setName] = useState(null);
  const onSubmitName = (value) => {
    setName(value);
  };
  const handleButtonClick = () => {
    let result = {};
    let resultId = {};
    Object.entries(columns).forEach(([, column]) => {
      result[column.name] = column.items.map((item) => item.content);
      resultId[column.name] = column.items.map((itemId) => itemId.id);
    });
    console.log(resultId);
    let code = '{';
    // Format the result object
    let formattedResult = '';
    let flag = false;
    if (clickedButton === '小组1') {
      formattedResult += `小组1\n`;
    } else if (clickedButton === '小组2') {
      formattedResult += `小组2\n`;
    } else {
      if (clickedButton === 'submit1') {
        formattedResult += `小组1\n`;
        code += '1/';
        // newResult["class"].items.push(1);
      } else if (clickedButton === 'submit2') {
        formattedResult += `小组2\n`;
        code += '2/';
        // newResult["class"].items.push(2);
      }
      code += name + '/';
      Object.entries(result).forEach(([key, value]) => {
        if (key !== '') {
          formattedResult += `${key}:\n`;
          value.forEach((item) => {
            if (key === 'Unit 1') {
              code += '1' + item;
              flag = answer1.includes(item);
            } else if (key === 'Unit 2') {
              code += '2' + item;
              flag = answer2.includes(item);
            } else if (key === 'Unit 3') {
              code += '3' + item;
              flag = answer3.includes(item);
            } else if (key === 'Unit 4') {
              code += '4' + item;
              flag = answer4.includes(item);
            }
            formattedResult += `  - ${item}`;
            if (flag === true) {
              formattedResult += `  √\n`;
            } else if (flag === false) {
              formattedResult += `  ×\n`;
            }
          });
        }
      });
      code += '}';
      if (clickedButton === 'submit1') {
        result['class'] = ['1'];
      } else if (clickedButton === 'submit2') {
        result['class'] = ['2'];
      }
    }
    setFinalCode(code);
    setFinalResult(formattedResult);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      {/*<Menu mode="vertical" theme={"dark"} style={{position: 'fixed', top: 0, left: 0, height:'100vh'}}>*/}
      {/*  <Menu.Item>*/}
      {/*    <Link to="/NUC_INFO">NUC_INFO</Link>*/}
      {/*  </Menu.Item>*/}
      {/*  <Menu.Item>*/}
      {/*    <Link to="/contact">contact</Link>*/}
      {/*  </Menu.Item>*/}
      {/*  <Menu.Item>*/}
      {/*    <Link to="/notfound">notfound</Link>*/}
      {/*  </Menu.Item>*/}
      {/*  <Menu.Item>*/}
      {/*    <Link to="/home">home</Link>*/}
      {/*  </Menu.Item>*/}
      {/*</Menu>*/}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          if (
            column.name === 'TODO1' ||
            column.name === 'TODO2' ||
            column.name === 'TODO3' ||
            column.name === 'TODO4' ||
            column.name === 'TODO5'
          ) {
            column.name = '';
          }
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: index >= 5 ? 8 : 0 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? 'lightblue'
                            : 'lightgrey',
                          padding: 4,
                          width: 100,
                          minHeight: column.name !== '' ? 790 : 0,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <Card
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    // title={item.content}
                                    style={{
                                      userSelect: 'none',
                                      padding: 16,
                                      margin: '0 0 0 0',
                                      minHeight: '50px',
                                      backgroundColor: snapshot.isDragging
                                        ? '#263B4A'
                                        : '#456C86',
                                      color: 'white',
                                      ...provided.draggableProps.style,
                                      width: '100px',
                                    }}
                                  >
                                    {item.content}
                                  </Card>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 32 }}></div>
        <Button
          type="primary"
          onClick={() => {
            setClickedButton('小组1');
          }}
          style={{
            backgroundColor: clickedButton === '小组1' ? 'green' : null,
          }}
        >
          小组1
        </Button>
        <div style={{ height: 8 }}></div>
        <Button
          type="primary"
          onClick={() => {
            setClickedButton('小组2');
          }}
          style={{
            backgroundColor: clickedButton === '小组2' ? 'green' : null,
          }}
        >
          小组2
        </Button>
        <div style={{ height: 8 }}></div>
        <Button type="primary" onClick={() => setColumns(columnsFromBackend)}>
          清空
        </Button>
        <div style={{ height: 8 }}></div>
        <Search
          placeholder="输入姓名"
          allowClear
          enterButton="提交"
          size="large"
          onSearch={onSubmitName}
        />
        <div style={{ height: 8 }}></div>
        <Button
          type="primary"
          onClick={() => {
            if (clickedButton === '小组1') {
              setClickedButton('submit1');
            } else if (clickedButton === '小组2') {
              setClickedButton('submit2');
            }
            handleButtonClick();
          }}
          style={{
            backgroundColor:
              clickedButton === '小组2' || clickedButton === '小组1'
                ? 'green'
                : null,
          }}
        >
          提交
        </Button>
      </div>

      <div style={{ width: 8 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
        >
          {finalResult && (
            <Card title="提交结果" style={{ width: 300 }}>
              <pre>{finalResult}</pre>
            </Card>
          )}
        </div>
        <div style={{ height: 8 }}></div>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
        >
          {finalCode && (
            <Card title="结果代码" style={{ width: 300 }}>
              <div style={{ wordWrap: 'break-word' }}>{finalCode}</div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
