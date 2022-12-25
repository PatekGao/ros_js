import {Menu, Table, Card} from 'antd';
import {Link} from 'umi';
import {useEffect, useState} from "react";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = event => {
  console.log(event.data);
};

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
      console.log(event.data);
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

  useEffect(() => {
    socket.onmessage = event => {
      //setData(prevData => [...prevData, JSON.parse(event.data)]);（一条一条增添）
      setData([JSON.parse(event.data)]);//（每次都是最新的一条）
    };
  }, []);

  return (
    <Card>
      <Table dataSource={data}>
        <Table.Column title="Speed" dataIndex="speed" key="speed" width={100} ellipsis/>
        <Table.Column title="Distance" dataIndex="distance" key="distance" width={100} ellipsis/>
        <Table.Column title="Temperature" dataIndex="temperature" key="temperature" width={100} ellipsis/>
        <Table.Column title="Altitude" dataIndex="altitude" key="altitude" width={100} ellipsis/>
      </Table>
    </Card>
)
  ;
}

function Index() {
  return (
    <div>
      <Menu mode="horizontal" theme={"dark"} style={{fontsize: '40px !important', color: 'blue'}}>
        <Menu.Item>
          <Link to="/about">about</Link>
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
    </div>

  );
}

export default Index;
