import React, {useState, useEffect}  from 'react';



import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

// https://react-chartjs-2.js.org/faq/registered-scale
import { Chart as cht, registerables } from 'chart.js';
cht.register(...registerables);

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    // a tricky when calling async inside useEffect
    const fetchAPI = async () => {
      const initDailyData = await fetchDailyData();
      console.log('debug1 dailyData:', initDailyData);
      setDailyData(initDailyData);
    }
    fetchAPI();
  }, []);

  // global data drawing by line chart
  const lineChart = (
    dailyData.length
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            }],
          }}
        />
      ) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;