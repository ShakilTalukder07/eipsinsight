import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import SingleType from "./SingleType";
import EIPsTable from "./EIPsTable/EIPsTable";
import { useLoaderData } from "react-router-dom";

const Type = () => {

    const [allData, setAllData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('../../../public/eipType.json')
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setLoading(false)
            })

    }, [])

    // console.log(allData);


    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h3 className="text-white font-semibold font-xl my-4 ml-4">Total EIPs (628)</h3>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-8'>
                {
                    allData.length && allData.map((data) => <SingleType
                        key={data.eip}
                        data={data}
                    ></SingleType>)
                }
            </div>
            {/* Table */}
            <EIPsTable></EIPsTable>
        </div>
    );
};

export default Type;