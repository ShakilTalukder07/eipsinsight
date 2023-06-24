import React from 'react';
import BarChart from './Section/BarChart';
import DonutChart from './Section/DonutChart';


const Final = () => {

    return (
        <div className='grid grid-flow-col justify-center items-center gap-4'>
            <div>
                <DonutChart></DonutChart>
            </div>
            <div>
                <BarChart></BarChart>
            </div>
        </div>
    );
};

export default Final;