import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import { API } from '../../../config';

function DataChart({ currentJob, currentColor }) {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetchChart();
  }, [currentJob]);

  useEffect(() => {
    colorChange();
  }, [currentColor]);

  const fetchChart = async () => {
    await fetch(`${API}/recruit/salary`)
      .then((res) => res.json())
      .then((res) => {
        const data = res.series[Number(currentJob)].data;
        const newData = [];
        data.map((el) => {
          newData.push({ name: el.year, y: el.salary });
        });
        setChart(newData);
      });
  };

  const colorChange = () => {
    const newData = chart.map((el, idx) => {
      return {
        ...el,
        color:
          idx === Number(currentColor)
            ? 'rgba(255, 255, 255, 0.7)'
            : 'rgba(0,0,0,0.1)',
      };
    });
    setChart(newData);
  };

  const data = {
    chart: {
      height: 320,
      backgroundColor: '#22bd79',
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      gridLineColor: 'rgba(192,192,192,0.5)',
      type: 'category',
      labels: {
        style: {
          color: 'rgba(0,0,0,0.7)',
        },
      },
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      gridLineColor: 'rgba(192,192,192,0.5)',
      labels: {
        formatter: function () {
          return Highcharts.numberFormat(this.value, 0);
        },
        style: {
          color: 'rgba(0,0,0,0.7)',
        },
      },
      title: {
        text: '',
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        color: 'rgba(0,0,0,0.1)',
        pointWidth: 20,
        data: chart,
      },
    ],
  };

  return (
    <>
      <ChartChanger>
        <HighchartsReact highcharts={Highcharts} options={data} />
      </ChartChanger>
    </>
  );
}

export default DataChart;

const ChartChanger = styled.div`
  width: 790px;
`;
