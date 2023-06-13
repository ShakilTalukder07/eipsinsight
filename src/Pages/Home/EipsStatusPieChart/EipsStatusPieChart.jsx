import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const EipsStatusPieChart = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            // title: {
            //     display: true,
            //     text: 'EIPs Types Pie Chart',
            //     position: "bottom"
            // },
        },
    };

    const data = {
        labels: ['Withdrawn (26)', 'Living (2)', 'Final (137)', 'Last_Call (20)', 'Review (51)', 'Draft (123)', 'Stagnant (251)'],
        datasets: [
            {
                label: 'Number of EIPs',
                data: [26, 2, 137, 20, 51, 123, 251],
                backgroundColor: [
                    'rgba(255, 115, 115)',
                    'rgba(59, 201, 219)',
                    'rgba(43, 204, 156)',
                    'rgba(113, 221, 131)',
                    'rgba(61, 159, 241)',
                    'rgba(252, 199, 37)',
                    'rgba(255, 195, 127)',
                ],
                borderColor: [
                    'rgba(249, 251, 251)',
                    'rgba(249, 251, 251)',
                    'rgba(249, 251, 251)',
                    'rgba(249, 251, 251)',
                    'rgba(249, 251, 251)',
                    'rgba(249, 251, 251)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className="shadow-3xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
            <div className='flex flex-col w-[500px] h-[350px] rounded-lg text-black bg-white'>
                <h1 className='text-start text-xl font-bold mt-3 ml-3'>EIPs Status <span className='ml-2'>636</span></h1>
                <div className='w-[500px] h-[400px] my-[-40px] flex justify-center items-center'>
                    <Pie data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default EipsStatusPieChart;