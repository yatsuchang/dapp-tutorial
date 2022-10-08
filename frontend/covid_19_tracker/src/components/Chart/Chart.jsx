import React, {useState, useEffect}  from 'react';



import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

// https://react-chartjs-2.js.org/faq/registered-scale
import { Chart as cht, registerables } from 'chart.js';
cht.register(...registerables);

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    // a tricky when calling async inside useEffect
    const fetchAPI = async () => {
      const initDailyData = await fetchDailyData();
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

  // country data drawing by bar chart
  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}`},
          }}
        />
      ) : null

  );

  console.log('[Chart] country:', country);

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;