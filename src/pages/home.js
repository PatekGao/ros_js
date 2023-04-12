import React, { useState } from 'react';
import { Button, Card, Input } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css';
import {
  itemsFromBackend4,
  itemsFromBackend2,
  itemsFromBackend1,
  itemsFromBackend3,
  itemsFromBackend5,
  answer1,
  answer2,
  answer3,
  answer4,
} from '../itemsTotal';

const { Search } = Input;

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
      Object.entries(resultId).forEach(([key, value]) => {
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
        });
      });
      Object.entries(result).forEach(([key, value]) => {
        if (key !== '') {
          formattedResult += `${key}:\n`;
          value.forEach((item) => {
            // if (key === 'Unit 1') {
            //   flag = answer1.includes(item);
            // } else if (key === 'Unit 2') {
            //   flag = answer2.includes(item);
            // } else if (key === 'Unit 3') {
            //   flag = answer3.includes(item);
            // } else if (key === 'Unit 4') {
            //   flag = answer4.includes(item);
            // }
            formattedResult += `  - ${item}\n`;
            // if (flag === true) {
            //   formattedResult += `  √\n`;
            // } else if (flag === false) {
            //   formattedResult += `  ×\n`;
            // }
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
