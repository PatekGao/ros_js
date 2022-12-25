const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 3000});

wss.on('connection', function connection(ws) {
  console.log('a user connected');

  setInterval(() => {
    const data = {
      speed: Math.random() * 100,
      distance: Math.random() * 1000,
      temperature: Math.random() * 50,
      altitude: Math.random() * 100
    };
    ws.send(JSON.stringify(data));
  }, 100);
});
