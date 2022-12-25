// import React, { useState, useEffect } from 'react';
// import { PageHeader, Spin, Card, Statistic } from 'antd';
// import roslib from 'roslib';
//
// const SensorPage = () => {
//   const [sensorData, setSensorData] = useState({});
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const ros = new roslib.Ros({
//       url: 'ws://localhost:9090'
//     });
//
//     const sensorTopic = new roslib.Topic({
//       ros: ros,
//       name: '/sensor_data',
//       messageType: 'sensor_msgs/Temperature'
//     });
//
//     sensorTopic.subscribe((message) => {
//       setSensorData(message);
//       setLoading(false);
//     });
//
//     return () => {
//       sensorTopic.unsubscribe();
//     }
//   }, []);
//
//   return (
//     <div>
//       <PageHeader
//         title="Sensor Data"
//         subTitle="This page displays real-time sensor data from a ROS topic"
//       />
//       {loading ? (
//         <Spin />
//       ) : (
//         <Card>
//           <Statistic title="Temperature" value={sensorData.temperature} />
//           <Statistic title="Pressure" value={sensorData.pressure} />
//           <Statistic title="Humidity" value={sensorData.humidity} />
//         </Card>
//       )}
//     </div>
//   );
// };
//
// export default SensorPage;

import DynamicDataTable from '../DynamicDataTable';

const HomePage = () => {
  return (
    <div>
      <DynamicDataTable />
    </div>
  );
};

export default HomePage;
