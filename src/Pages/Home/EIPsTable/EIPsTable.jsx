import { useEffect, useState } from "react";
import SingleTable from "./SingleTable";
import Spinner from "../../../Components/Spinner/Spinner";

const EIPsTable = () => {

    const [loading, setLoading] = useState(true)
    const [tableData, setTableData] = useState()

    useEffect(() => {
        fetch("../../../../public/allData.json")
            .then(res => res.json())
            .then(data => setTableData(data))
        setLoading(false)
    }, [])


    if (loading) {
        return <Spinner></Spinner>
    }

    // console.log(tableData);



    return (
        <div class=" bg-white rounded-lg flex flex-col overflow-x-auto">
            <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-x-auto">
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500 text-black">
                                <tr>
                                    <th scope="col" class="px-6 py-4">Number</th>
                                    <th scope="col" class="px-6 py-4">Title</th>
                                    <th scope="col" class="px-6 py-4">Author</th>
                                    <th scope="col" class="px-6 py-4">Type</th>
                                    <th scope="col" class="px-6 py-4">Category</th>
                                    <th scope="col" class="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-neutral-500  text-[#3BC9DB] font-bold hover:text-sky-500 hover:bg-gray-200">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium"><span className="px-3 py-2 rounded-xl bg-[#3BC9DB] text-white">1</span></td>
                                    <td class="whitespace-nowrap px-6 py-4 ">Storage of DNS Records in ENS</td>
                                    <td class="whitespace-nowrap px-6 py-4">Jim McDonald (@mcdee)</td>
                                    <td class="whitespace-nowrap px-6 py-4">Standards Track</td>
                                    <td class="whitespace-nowrap px-6 py-4">ERC</td>
                                    <td class="whitespace-nowrap px-6 py-4"><span className="px-3 py-2 rounded-xl bg-[#3BC9DB] text-white">Review</span></td>
                                </tr>
                                <tr class="border-b dark:border-neutral-500 text-[#2BCC9C] font-bold">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                                    <td class="whitespace-nowrap px-6 py-4">Client Script URI for Token Contracts</td>
                                    <td class="whitespace-nowrap px-6 py-4">James (@JamesSmartCell), Weiwu (@weiwu-zhang)</td>
                                    <td class="whitespace-nowrap px-6 py-4">Standards Track</td>
                                    <td class="whitespace-nowrap px-6 py-4">ERC</td>
                                    <td class="whitespace-nowrap px-6 py-4">Final</td>
                                </tr>
                                <tr class="border-b dark:border-neutral-500 text-[#3D9FF1] font-bold">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Client Script URI for Token Contracts</td>
                                    <td class="whitespace-nowrap px-6 py-4">James (@JamesSmartCell), Weiwu (@weiwu-zhang)</td>
                                    <td class="whitespace-nowrap px-6 py-4">Standards Track</td>
                                    <td class="whitespace-nowrap px-6 py-4">ERC</td>
                                    <td class="whitespace-nowrap px-6 py-4">Review</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EIPsTable;