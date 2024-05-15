import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';

import Chart from 'chart.js/auto';


const Graph5 = () => {
    const [pestleData, setPestleData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/pestle-data'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPestleData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const getChartData = () => {
        const pestleCounts = pestleData.reduce((acc, cur) => {
          acc[cur.pestle] = (acc[cur.pestle] || 0) + 1;
          return acc;
        }, {});
    
        const labels = Object.keys(pestleCounts);
        const data = Object.values(pestleCounts);
    
        const scaledData = data.map(value => value /10);
    
        return {
          labels: labels,
          datasets: [
            {
              label: 'Pestle Data',
              data: scaledData,
              backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
          },
        ],
      };
    };
  
    return (
      <div className='flex-grow mt-6'>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mr-4 ">
        <h2>Polar Area Chart </h2>
        <div style={{ height: '500px', width: '500px' }}  className='ml-64'>
          <PolarArea data={getChartData()} />
        </div>
      </div>
      </div>
    );
  };
  
  
export default Graph5
