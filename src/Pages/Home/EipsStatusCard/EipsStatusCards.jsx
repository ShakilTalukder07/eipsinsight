import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/Spinner/Spinner';
import SingleCard from "../EipsStatusCard/SingleCard"
import StatusCardsLineChart from '../StatusCardsLineChart/StatusCardsLineChart';

const EipsStatusCards = () => {

    const [allCard, setAllCard] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('../../../../public/eipType.json')
            .then(res => res.json())
            .then(data => {
                setAllCard(data)
                setLoading(false)
            })

    }, [])

    // console.log(allCard);


    if (loading) {
        return <Spinner></Spinner>
    }


    return (

        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8'>
            <div className='bg-white font-bold shadow-[#FAEA10] shadow-md flex justify-between items-center w-[250px] h-28 text-center px-4 py-2 gap-3 rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...'>
                <div className='w-1/2'>
                    <p className='text-sm text-black'>Total EIPs</p>
                    <h2 className=" font-bold text-black text-2xl">636</h2>
                </div>
                <div className="className='w-1/2'">
                    <StatusCardsLineChart></StatusCardsLineChart>
                </div>
            </div>
            {
                allCard?.length && allCard?.map((card) =>
                    <SingleCard
                        key={card.number}
                        card={card}
                    ></SingleCard>
                )
            }
        </div>
    );
};

export default EipsStatusCards;