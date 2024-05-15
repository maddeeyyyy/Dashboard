import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const Graph3 = () => {
    const [regionData, setRegionData] = useState([]);
   

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/regions'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRegionData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const getChartData = () => {
      const regionCounts = regionData.reduce((acc, cur) => {
        acc[cur.region] = (acc[cur.region] || 0) + 1;
        return acc;
      }, {});
  
      const labels = Object.keys(regionCounts);
      const data = Object.values(regionCounts);
     
  
      return {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
            ],
          },
        ],
      };
    };  
  
    return (
<div className='flex-grow mt-6'>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mr-4">
        
        <h2 >Doughnut Chart </h2>
        <div style={{ height: '600px', width: '600px' }}  className='ml-44'>
          <Doughnut data={getChartData()} />
        </div>
        </div>
      </div>
    );
  };


export default Graph3
