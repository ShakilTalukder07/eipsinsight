import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';




Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

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


const EipsTypeDonughtChart = () => {

    const [data, setData] = useState({

        labels: ['Withdrawn', 'Living', 'Final', 'Last_Call', 'Review', 'Draft', 'Stagnant'],
        datasets: [
            {
                label: 'EIPs status',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(255, 115, 115)',
            }
        ],
    });

    useEffect(() => {
        const fetchData = async () => {

            const number = [];
            const labelSet = [];

            await fetch("eipType.json")
                .then(res => res.json())
                .then((res) => {
                    // console.log("ressss", res)
                    for (const value of res) {
                        number.push(value.number);
                        // dataSet2.push(val.type)
                        labelSet.push(value.type)
                    }
                    setData({
                        labels: labelSet,
                        datasets: [
                            {
                                label: "EIPs",
                                data: number,
                                backgroundColor: [
                                    'rgba(59, 201, 219)',
                                    'rgba(43, 204, 156)',
                                    'rgba(113, 221, 131)',
                                    'rgba(61, 159, 241)',
                                    'rgba(252, 199, 37)',
                                    'rgba(255, 195, 127)',
                                    'rgba(255, 115, 115)',
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
                            }
                        ],
                    })
                    // console.log("arrData", dataSet1, dataSet2)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }

        fetchData();
    }, [])


    return (
        <div className="shadow-3xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
            <div className='flex flex-col w-[500px] h-[350px] rounded-lg text-black bg-white'>
                <h1 className='text-start text-xl font-bold mt-3 ml-3'>EIPs Types <span className='ml-2'>636 </span></h1>
                <div className='w-[520px] h-[420px] my-[-50px] flex justify-center items-center'>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default EipsTypeDonughtChart;