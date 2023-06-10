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
        title: {
            display: true,
            text: 'EIPs Status Bar Chart',
            position: "top"
        },
    },
};


const EipsTypeAndCategories = () => {

    const [data, setData] = useState({

        labels: ['Withdrawn', 'Living', 'Final', 'Last_Call', 'Review', 'Draft', 'Stagnant'],
        datasets: [
            {
                label: 'Withdrawn',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(255, 115, 115)',
            },
            {
                label: 'Living',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(59, 201, 219)',
            },
            {
                label: 'Final',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(43, 204, 156)',
            },
            {
                label: 'Last_Call',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(113, 221, 131)',
            },
            {
                label: 'Review',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(61, 159, 241)',
            },
            {
                label: 'Draft',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(252, 199, 37)',
            },
            {
                label: 'Stagnant',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(255, 195, 127)',
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {

            const number = [];
            const dataSet2 = [];
            const labelSet = [];

            await fetch("../../../../public/eipsStatus.json")
                .then(res => res.json())
                .then((res) => {
                    console.log("ressss", res)
                    for (const val of res) {
                        number.push(val.number);
                        // dataSet2.push(val.type)
                        labelSet.push(val.status)

                    }
                    setData({
                        labels: labelSet,
                        datasets: [
                            {
                                label: "EIPs",
                                data: number,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: [
                                    'rgba(59, 201, 219)',
                                    'rgba(43, 204, 156)',
                                    'rgba(113, 221, 131)',
                                    'rgba(61, 159, 241)',
                                    'rgba(252, 199, 37)',
                                    'rgba(255, 195, 127)',
                                    'rgba(255, 115, 115)',
                                ],
                            },
                            // {
                            //     label: 'Type',
                            //     data: dataSet2,
                            //     borderColor: 'rgb(53, 162, 235)',
                            //     backgroundColor: 'rgba(53, 235, 0.5)',
                            // },
                            // {
                            //     label: 'Created Date',
                            //     data: labelSet,
                            //     borderColor: 'rgb(53, 162, 235)',
                            //     backgroundColor: 'rgba(53, 235, 0.5)',
                            // },
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
        <div className='w-[500px] h-[300px] rounded-lg text-white bg-[#1B3838]'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default EipsTypeAndCategories;