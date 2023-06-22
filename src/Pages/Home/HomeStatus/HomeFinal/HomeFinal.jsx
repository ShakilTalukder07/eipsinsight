import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";



Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

// const options = {
//     indexAxis: 'x',
//     elements: {
//         bar: {
//             borderWidth: 2,
//         },
//     },
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'right',
//         },
//     },
// };

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        }
    },
    elements: {
        point: {
          borderWidth: 1,
          radius: 3,
          backgroundColor: 'rgba(11,9,5)'
        }
      },
};




const HomeFinal = () => {

    const [data, setData] = useState({

        labels: ['Created Date'],
        datasets: [
            {
                label: 'Core',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            },
            {
                label: 'Living',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(25, 90, 13, 0.5)',
            }
        ],
       
    });

    useEffect(() => {
        const fetchData = async () => {

            const core = [];
            const erc = [];
            const labelSet = [];

            await fetch("https://eipsinsight.com/api/allInfo")
                .then(res => res.json())
                .then((res) => {

                    // console.log("ressss", res[0].Final)

                    for (const val of res[0].Final) {

                        core.push(val.category == "Core");
                        erc.push(val.category == "ERC");
                        labelSet.push(val.created.slice(0,10))
                    }
                    setData({
                        labels: labelSet,
                        datasets: [
                            {
                                label: 'Core',
                                data: core,
                                borderColor: 'rgba(136, 189, 236)',
                                backgroundColor: [
                                    'rgba(96, 165, 250)',
                                ],
                            },
                            {
                                label: 'ERC',
                                data: erc,
                                borderColor: 'rgba(136, 189, 236)',
                                backgroundColor: [
                                    'rgba(192, 132, 252)',
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
            <h1 className='flex justify-center items-center bg-white text-black text-2xl font-bold rounded-sm w-48 h-12 mb-2 mx-2'>Final<span className="bg-[#2BCC9C] px-3 ml-2 rounded-sm">137</span> </h1>
            <div className=' h-[330px] flex justify-center items-center mx-2 p-2 rounded-sm bg-white'>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default HomeFinal;