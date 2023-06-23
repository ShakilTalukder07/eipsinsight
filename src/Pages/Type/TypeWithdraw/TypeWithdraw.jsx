import { cilHamburgerMenu } from "@coreui/icons";
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
    Element: {

        borderWidth: 40,
        hoverBorderWidth: 0,
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        }
    },
};

const TypeWithdraw = () => {

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
                    // console.log("ressss", res[1].status)

                    for (const value of res[1].status) {
                        number.push(value.number);
                        // dataSet2.push(val.type)
                        labelSet.push(value.category)
                    }
                    setData({
                        labels: labelSet,
                        datasets: [
                            {
                                label: "EIPs",
                                data: number,
                                backgroundColor: [
                                    'rgba(96, 165, 250)',
                                    'rgba(192, 132, 252)',
                                    'rgba(74, 222, 128)',
                                    'rgba(34, 211, 238)',
                                ],
                                borderColor: [
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
        <div className="flex gap-4">
            <div className="w-1/2 shadow-2xl rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                <div className='flex flex-col w-[500px] h-[350px] rounded-lg text-black bg-white'>
                    <h1 className='text-start text-xl font-bold mt-3 ml-3'>Withdraw<span className='ml-2'>26</span></h1>
                    <div className='w-[520px] h-[420px] my-[-50px] flex justify-center items-center'>
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>

            {/* ======================= table ========================= */}

            <div class=" bg-white w-1/2 rounded-md shadow-2xl flex flex-col overflow-x-auto">
                <div class="sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-x-auto">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500 text-black">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">Type & Category</th>
                                        <th scope="col" class="px-6 py-4">Number Of EIPs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-neutral-500  text-[#3892FF] font-bold hover:text-sky-500 hover:bg-gray-200">
                                        <td class="whitespace-nowrap px-6 py-4 text-xl font-medium">Core</td>
                                        <td class="whitespace-nowrap px-6 py-4 "><span className="px-3 py-2 rounded-xl bg-[#3892FF] text-white">19</span></td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500  text-[#AD5BFF] font-bold hover:text-sky-500 hover:bg-gray-200">
                                        <td class="whitespace-nowrap px-6 py-4 text-xl font-medium">ERC</td>
                                        <td class="whitespace-nowrap px-6 py-4 "><span className="px-3 py-2 rounded-xl bg-[#AD5BFF] text-white">5</span></td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500  text-[#4ADE80] font-bold hover:text-sky-500 hover:bg-gray-200">
                                        <td class="whitespace-nowrap px-6 py-4 text-xl font-medium">Interface</td>
                                        <td class="whitespace-nowrap px-6 py-4 "><span className="px-3 py-2 rounded-xl bg-[#4ADE80] text-white">1</span></td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500  text-[#22D3EE] font-bold hover:text-sky-500 hover:bg-gray-200">
                                        <td class="whitespace-nowrap px-6 py-4 text-xl font-medium">Informational</td>
                                        <td class="whitespace-nowrap px-6 py-4 "><span className="px-3 py-2 rounded-xl bg-[#22D3EE] text-white">1</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypeWithdraw;