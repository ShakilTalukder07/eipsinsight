import { useEffect, useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import SingleType from "./SingleType";

const TypeSection = () => {

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

    if (loading) {
        return <Spinner></Spinner>
    }


    return (
        <div>
            <h3 className="text-white font-semibold font-xl ml-4">Total EIPs (636)</h3>
            <div className='grid gap-4 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 mx-8'>
                {
                    allData.length && allData.map((data) => <SingleType
                        key={data.eip}
                        data={data}
                    ></SingleType>)
                }
            </div>
        </div>
    );
};

export default TypeSection;