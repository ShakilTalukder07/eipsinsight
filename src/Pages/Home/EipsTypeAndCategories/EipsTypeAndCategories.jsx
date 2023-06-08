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
            text: 'EIP Created Date Bar Chart',
        },
    },
};


const EipsTypeAndCategories = () => {

    const [data, setData] = useState({

        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Dataset 3',
                data: [],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {

            const dataSet1 = [];
            const dataSet2 = [];
            const labelSet = [];

            await fetch("../../../../public/data.json")
                .then(res => res.json())
                .then((res) => {
                    // console.log("ressss", res)
                    for (const val of res) {
                        dataSet1.push(val.eip);
                        dataSet2.push(val.type)
                        labelSet.push(val.created)

                    }
                    setData({
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'EIP',
                                data: dataSet1,
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(99, 132, 0.5)',
                            },
                            {
                                label: 'Type',
                                data: dataSet2,
                                borderColor: 'rgb(53, 162, 235)',
                                backgroundColor: 'rgba(53, 235, 0.5)',
                            },
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
        <div className='w-80 h-80 text-white'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default EipsTypeAndCategories;