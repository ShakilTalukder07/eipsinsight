import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const EipsStatus = () => {

    const data = {
        labels: ['Withdrawn', 'Living', 'Final', 'Last_Call', 'Review', 'Draft', 'Stagnant'],
        datasets: [
            {
                label: '# of Votes',
                data: [26, 2, 137, 20, 51, 123, 251],
                backgroundColor: [
                    'rgba(255, 115, 115)',
                    'rgba(43, 204, 156)',
                    'rgba(113, 221, 131)',
                    'rgba(61, 159, 241)',
                    'rgba(252, 199, 37)',
                    'rgba(255, 195, 127)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className='w-80 h-80 text-white'>
            <Pie data={data} />
        </div>
    );
};

export default EipsStatus;