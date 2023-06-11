import { useEffect, useState } from "react";
import SingleTable from "./SingleTable";
import Spinner from "../../../Components/Spinner/Spinner";

const EIPsTable = () => {

    const [loading, setLoading] = useState(true)
    const [tableData, setTableData] = useState()

    useEffect(() => {
        fetch("https://eipsinsight.com/api/getAll")
            .then(res => res.json())
            .then(data => setTableData(data))
        setLoading(false)
    }, [])


    if (loading) {
        return <Spinner></Spinner>
    }

    // console.log(tableData);

    let allData = tableData

    console.log(allData.length);

    // for(const values in allData){
    //     // console.log(values)
    // }

    return (
        <div>
            {/* <h1 className="text-white">{tableData.length}</h1> */}
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Author
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Draft Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Final Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {/* <h1 className="text-white">{tableData.length}</h1> */}
                                    {/* {
                                        tableData.map(table =>
                                            <SingleTable
                                                key={table._id}
                                                table={table}
                                            ></SingleTable>
                                        )
                                    } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EIPsTable;