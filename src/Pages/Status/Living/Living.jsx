import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
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
            // labels: {
            //     fontColor: "blue",
            //     fontSize: 18
            // }
            // display: false
        }
    },
};

const Living = () => {

    const [data, setData] = useState({

        labels: ['Meta', 'Informational'],
        datasets: [
            {
                label: 'Meta',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(255, 115, 115)',
            },
            {
                label: 'Informational',
                data: [],
                borderColor: 'rgba(249, 251, 251)',
                backgroundColor: 'rgba(59, 201, 219)',
            }
        ],
    });

    // console.log(data);


    useEffect(() => {
        const fetchData = async () => {

            const number = [];
            const labelSet = [];

            await fetch("../../../../public/eipStatus.json")
                .then(res => res.json())
                .then((res) => {

                    // console.log("ressss", res[0].status[0].number)

                    for (const value of res[0].status) {
                        number.push(value.number);
                        // dataSet2.push(val.type)
                        labelSet.push(value.category);

                    }
                    setData({
                        type: "Living",
                        number: 2,
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'Status',
                                data: number,
                                borderColor: 'rgba(249, 251, 251)',
                                backgroundColor: [
                                    'rgba(147, 107, 98)',
                                    'rgba(43, 48, 69)'
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
            <h1 className='flex justify-center items-center bg-white text-black text-2xl font-bold rounded-sm w-32 h-12 mb-2 mx-2'>{data.type}<span className="bg-[#3BC9DB] px-3 ml-2 rounded-sm">{data.number}</span> </h1>
            <div className='w-[500px] h-[330px] flex justify-center items-center mx-2 p-2 rounded-sm bg-white'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Living;