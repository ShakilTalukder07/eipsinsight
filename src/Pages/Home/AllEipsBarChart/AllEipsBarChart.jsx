import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";



Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

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
        },
    },
};



  


const AllEipsBarChart = () => {

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

            const eips = [];
            const labelSet = [];

            await fetch("../../../../public/allData.json")
                .then(res => res.json())
                .then((res) => {
                    // console.log("ressss", res)
                    for (const val of res) {
                        eips.push(val.eip);
                        labelSet.push(val.created)
                    }
                    setData({
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'EIPs',
                                data: eips,
                                borderColor: 'rgba(136, 189, 236)',
                                backgroundColor: [
                                    'rgba(255, 115, 115)',
                                    'rgba(59, 201, 219)',
                                    'rgba(43, 204, 156)',
                                    'rgba(113, 221, 131)',
                                    'rgba(61, 159, 241)',
                                    'rgba(252, 199, 37)',
                                    'rgba(255, 195, 127)',
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
            <div className='flex flex-col  rounded-lg text-black bg-white'>
                <h1 className='text-center text-xl font-bold mt-3 ml-3'>Total EIPs<span className='ml-2'>636</span></h1>
                <div className='w-full h-[400px] flex justify-center items-center'>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default AllEipsBarChart;