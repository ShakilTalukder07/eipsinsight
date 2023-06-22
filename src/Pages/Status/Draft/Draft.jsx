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
        // title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        // },
    },
};


const Draft = () => {

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

                    for (const value of res[5].eips) {
                        number.push(value.unique_ID);
                        // dataSet2.push(val.type)
                        labelSet.push(value.created.slice(0, 10));

                    }
                    setData({
                        type: res[5].status,
                        number: res[5].eips.length,
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'EIPs',
                                data: number,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: [
                                    'rgba(252, 192, 37)'
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
        <div className="shadow-3xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
            <h1 className='flex justify-center items-center bg-white text-black text-2xl font-bold rounded-sm w-48 h-12 mb-2 mx-2'>{data.type}<span className="bg-[#FCC725] px-3 ml-2 rounded-sm">{data.number}</span> </h1>
            <div className='w-[500px] h-[330px] flex justify-center items-center mx-2 p-2 rounded-sm bg-white'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Draft;