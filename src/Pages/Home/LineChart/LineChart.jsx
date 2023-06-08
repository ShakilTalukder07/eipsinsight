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


const LineChart = () => {

    options = {
        responsive: true,
        plugins: {
            legend: true,
            scales: {
                y: {
                    min: 3,
                    max: 6
                }
            }
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [6, 3, 9],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Dataset 2',
                data: [6, 3, 9],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                fill: true,
                tension: 0.4
            },
        ],
    };

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;