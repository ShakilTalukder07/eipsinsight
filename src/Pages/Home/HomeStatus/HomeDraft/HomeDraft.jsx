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
        }
    },
};


const HomeDraft = () => {

    const [data, setData] = useState({

        labels: ['Created Date'],
        datasets: [
            {
                label: 'EIPs',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {

            const core = [];
            const meta = [];
            const erc = [];
            const networking = [];
            const Interface = [];
            const informational = [];
            const labelSet = [];

            await fetch("https://eipsinsight.com/api/allInfo")
                .then(res => res.json())
                .then((res) => {

                    console.log("ressss", res[1].Draft)

                    for (const value of res[1].Draft) {
                        core.push(value.category == "Core")
                        meta.push(value.category == "META")
                        erc.push(value.category == "ERC")
                        networking.push(value.category == "Networking")
                        Interface.push(value.category == "Interface")
                        informational.push(value.category == "Informational")
                        // dataSet2.push(val.type)
                        labelSet.push(value.created.slice(0, 10));
                    }
                    setData({
                        type: "Draft",
                        number: res[1].Draft.length,
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'Core',
                                data: core,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: 'rgba(96, 165, 250)',
                            },
                            {
                                label: 'Meta',
                                data: meta,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: 'rgba(251, 146, 60)',
                            },
                            {
                                label: 'ERC',
                                data: erc,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: 'rgba(192, 32, 252)',
                            },
                            {
                                label: 'Networking',
                                data: networking,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: 'rgba(250, 204, 21)',
                            },
                            {
                                label: 'Interface',
                                data: Interface,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: 'rgba(72, 222, 128)',
                            },
                            {
                                label: 'Informational',
                                data: informational,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: 'rgba(34, 211, 238)',
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
            <div className=' h-[330px] flex justify-center items-center mx-2 p-2 rounded-sm bg-white'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default HomeDraft;