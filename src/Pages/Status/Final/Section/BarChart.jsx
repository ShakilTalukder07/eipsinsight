import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
    },
};
const BarChart = () => {

    const [data, setData] = useState({

        labels: ['Created Date'],
        datasets: [
            {
                fill: true,
                label: 'EIPs',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            const number = [];
            const labelSet = [];
            await fetch("http://localhost:5000/alleips")
                .then(res => res.json())
                .then((res) => {
                    console.log("ressss", res)
                    let eip = res[2].eips
                    // console.log(eip);
                    for (let value of eip) {
                        labelSet.push(value.created.slice(0, 10));
                    }
                    for (let i = 1; i < eip.length; i++) {
                        number.push(i)
                    }
                    setData({
                        type: res[2].status,
                        number: res[2].eips.length,
                        labels: labelSet.sort(),
                        datasets: [
                            {
                                label: 'EIPs',
                                data: number,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: [
                                    'rgba(43, 204, 156)'
                                ],
                            },
                        ],
                    })
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();
    }, [])

    return (
        <div className="mt-14 shadow-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
            <div className='w-[500px] h-[350px] flex justify-center items-center mx-2 p-2 rounded-sm bg-white'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;