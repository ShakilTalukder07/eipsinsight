import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const StatusCardsLineChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    elements: {
      point: {
        borderWidth: 0,
        radius: 0,
        backgroundColor: 'rgba(11,9,5)'
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 1,
        loop: true
      }
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10.5, 14.3, 16, 19.7, 23],
        borderColor: 'rgb(11,9,5)',
        backgroundColor: 'rgba(11,9,5)',
      }
    ],
  };


  return (
    <div className="text-white ml-10 my-1 w-36 h-16">
      <Line options={options} data={data} />
    </div>
  );
};

export default StatusCardsLineChart;