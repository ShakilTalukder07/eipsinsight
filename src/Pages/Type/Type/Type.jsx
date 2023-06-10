import { useEffect, useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import SingleType from "../TypeSection/SingleType";
import EIPsTable from "../EIPsTable/EIPsTable";
import { useLoaderData } from "react-router-dom";
import TypeSection from "../TypeSection/TypeSection";

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
            <TypeSection></TypeSection>
        </div>
    );
};

export default Type;