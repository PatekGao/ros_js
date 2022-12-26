const rosnodejs = require('rosnodejs');
const single_result = rosnodejs.require('rc_msgs').msg.single_result;
const identify_results = rosnodejs.require('rc_msgs').msg.identify_results;
rosnodejs.initNode('/ros_js_bridge')
  .then((rosNode) => {
    rosNode.subscribe('/identify_results', identify_results, (data) => {
      console.log('Received message: ${data.result.identify_result}')
    });
  });
