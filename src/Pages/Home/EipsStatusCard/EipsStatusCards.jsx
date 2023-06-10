import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/Spinner/Spinner';
import SingleCard from "../EipsStatusCard/SingleCard"

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

    console.log(allCard);


    if (loading) {
        return <Spinner></Spinner>
    }


    return (

        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-8'>
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