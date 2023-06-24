import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
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
    },
};

const DonutChart = () => {


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

            await fetch("eipStatus.json")
                .then(res => res.json())
                .then((res) => {
                    // console.log("ressss", res)
                    for (const value of res[1].status) {
                        number.push(value.number);
                        // dataSet2.push(val.type)
                        labelSet.push(value.category)
                    }
                    setData({
                        type: res[1].type,
                        number: res[1].number,
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
        <div>
            <div className="shadow-lg w-48 h-12 mb-3">
                <h1 className='flex justify-center items-center bg-white text-[#036666] text-2xl font-bold rounded-sm w-48 h-12 mb-2 mx-2'>{data.type}<span className="bg-[#2BCC9C] text-black px-3 ml-2 rounded-sm">{data.number} </span> </h1>
            </div>

            <div className="shadow-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                <div className='flex flex-col w-[500px] h-[350px] rounded-lg bg-white'>
                    <div className='w-[520px] h-[420px] my-[-50px] mt-1 flex justify-center items-center'>
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;