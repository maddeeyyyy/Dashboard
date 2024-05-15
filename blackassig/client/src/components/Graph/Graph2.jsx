import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,BarElement} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);


const Graph2 = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/bar-chart-data');
          const data = await response.json();
  
          if (data && data.topics && data.intensity) {
            setChartData({
              labels: data.topics,
              datasets: [
                {
                  label: 'Intensity',
                  data: data.intensity,
                  backgroundColor: 'rgba(54, 162, 235, 0.6)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1,
                },
              ],
            });
          } else {
            console.error('Data format is incorrect:', data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className='flex-grow'>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mr-4">
        <h2>Bar Chart</h2>
        {chartData.labels && chartData.labels.length > 0 ? (
          <Bar
            data={chartData}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        ) : (
          <p>No data available</p>
        )}
        </div>
      </div>
    );
  };

export default Graph2
