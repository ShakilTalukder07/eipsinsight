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
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            display: false
        },
    },
};


const HomeWithdraw = () => {


    const [data, setData] = useState({

        labels: ['Created Date'],
        datasets: [
            {
                label: 'eips',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            }
        ],
    });

    useEffect(() => {
        const fetchData = async () => {

            const number = [];
            const labelSet = [];

            await fetch("../../../../../public/eipStatus.json")
                .then(res => res.json())
                .then((res) => {

                    // console.log("ressss", res[0].status[0].number)

                    for (const value of res[1].status) {
                        number.push(value.number);
                        // dataSet2.push(val.type)
                        labelSet.push(value.category);

                    }
                    setData({
                        type: "Withdraw",
                        number: 26,
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'Status',
                                data: number,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: [
                                    'rgba(96, 165, 250)',
                                    'rgba(192, 132, 252)',
                                    'rgba(74, 222, 128)',
                                    'rgba(34, 211, 238)',
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
            <h1 className='flex justify-center items-center bg-white text-black text-2xl font-bold rounded-sm w-48 h-12 mb-2 mx-2'>{data.type}<span className="bg-[#FF4E4E] px-3 ml-2 rounded-sm">{data.number}</span> </h1>
            <div className='w-[500px] h-[330px] flex justify-center items-center mx-2 p-2 rounded-sm bg-white'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default HomeWithdraw;