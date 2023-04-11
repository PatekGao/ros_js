const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// 存储所有用户访问信息的 JavaScript 对象
const accessLogs = {};

// 当有新的 WebSocket 连接时
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // 监听客户端发来的消息
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // 解析接收到的访问信息
    const log = JSON.parse(message);

    // 将访问信息存储到 JavaScript 对象中
    if (!accessLogs[log.url]) {
      accessLogs[log.url] = {
        count: 1,
        users: [log.user],
      };
    } else {
      accessLogs[log.url].count++;
      accessLogs[log.url].users.push(log.user);
    }

    // 汇总和统计访问信息
    const summary = Object.keys(accessLogs)
      .map(function (url) {
        return {
          url: url,
          count: accessLogs[url].count,
          users: accessLogs[url].users,
        };
      })
      .sort(function (a, b) {
        return b.count - a.count;
      });

    // 将汇总和统计信息发送给客户端
    ws.send(JSON.stringify(summary));
  });
});
