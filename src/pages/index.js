import {Card, Menu, Progress, Table} from 'antd';
import {Link} from 'umi';
import React, {useEffect, useState} from "react";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import FloatButtom from "./FloatButtom";

const socket = new WebSocket('ws://' + window.location.hostname + ':3000');

// socket.onmessage = event => {
//   console.log(event.data);
// };

function RealtimeLineChart({title, dataKey}) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        name: title,
        data: []
      }
    ]
  });

  const options = {
    title: {
      text: title
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
          Highcharts.numberFormat(this.y, 2);
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: data.datasets
  };

  useEffect(() => {
    socket.onmessage = event => {
      // console.log(event.data);
      const newData = JSON.parse(event.data);
      const timestamp = new Date().getTime();
      const value = newData[dataKey];

      if (value !== undefined) {
        setData(prevData => {
          const labels = [...prevData.labels, timestamp];
          const datasets = prevData.datasets.map(dataset => {
            const data = [...dataset.data, newData[dataKey]];
            return {...dataset, data};
          });
          return {
            labels: labels,
            datasets: datasets.map(dataset => {
              return {...dataset, data};
            })
          };
        });
      }
    };
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}

function DynamicTable() {
  const [data, setData] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [distance, setDistance] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [altitude, setAltitude] = useState(0);

  useEffect(() => {
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      //setData(prevData => [...prevData, JSON.parse(event.data)]);（一条一条增添）
      setData([data]);//（每次都是最新的一条）
      setSpeed(data.speed);
      setDistance(data.distance);
      setTemperature(data.temperature);
      setAltitude(data.altitude);
    };
  }, []);

  return (
    <Card>
      <Table dataSource={data} bordered>
        <Table.Column title="Speed" dataIndex="speed" key="speed" width={100} ellipsis/>
      </Table>
      <Progress percent={speed} status="active" strokeColor={{'0%': '#f56a6a', '100%': '#5fb3b3'}}
                format={percent => `${percent.toFixed(1)}%`}/>
      <Table dataSource={data} bordered>
        <Table.Column title="Distance" dataIndex="distance" key="distance" width={100} ellipsis/>
      </Table>
      <Progress percent={distance / 10} status="active" strokeColor={{'0%': '#5fb3b3', '100%': '#e9c46a'}}
                format={percent => `${percent.toFixed(1)}%`}/>
      <Table dataSource={data} bordered>
        <Table.Column title="Temperature" dataIndex="temperature" key="temperature" width={100} ellipsis/>
      </Table>
      <Progress percent={temperature * 2} status="active" strokeColor={{'0%': '#e9c46a', '100%': '#663399'}}
                format={percent => `${percent.toFixed(1)}%`}/>
      <Table dataSource={data} bordered>
        <Table.Column title="Altitude" dataIndex="altitude" key="altitude" width={100} ellipsis/>
      </Table>
      <Progress percent={altitude} status="active" strokeColor={{'0%': '#663399', '100%': '#f56a6a'}}
                format={percent => `${percent.toFixed(1)}%`}/>
    </Card>
  );
}

function Index() {
  return (
    <div>
      <Menu mode="horizontal" theme={"dark"}>
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
      <DynamicTable/>
      {/*<RealtimeLineChart title="Speed" datakey="speed"/>*/}
      {/*<RealtimeLineChart title="Distance" datakey="distance"/>*/}
      {/*<RealtimeLineChart title="Temperature" datakey="temperature"/>*/}
      {/*<RealtimeLineChart title="Altitude" datakey="altitude"/>*/}
      <FloatButtom/>
    </div>
  );
}

export default Index;
