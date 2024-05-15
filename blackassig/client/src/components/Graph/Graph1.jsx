import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph1 = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/sector');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      renderChart();
    }
  }, [data]);

  const renderChart = () => {
    const sectors = data.map(item => item.sector);
    const sectorCounts = {};

    sectors.forEach(sector => {
      sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
    });

    if (chartRef.current) {
      chartRef.current.destroy(); 
    const ctx = document.getElementById('barChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(sectorCounts),
        datasets: [{
          label: 'Sector Count',
          data: Object.values(sectorCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  return (
    <div className=''>
      <h2>Sector Distribution</h2>
      <canvas id="barChart" width="200" height="200"></canvas>
    </div>
  );
};
}
export default Graph1;
