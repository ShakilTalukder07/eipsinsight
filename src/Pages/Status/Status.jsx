import { TbStatusChange } from 'react-icons/tb';
import Draft from "./Draft/Draft";
import Final from "./Final/Final";
import Living from "./Living/Living";
import Withdraw from "./Withdraw/Withdraw";


const Status = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <h1 className="flex justify-center items-center shadow-2xl text-[#036666] mt-4 p-4 rounded-md font-semibold text-center text-5xl"><span className='mr-4'><TbStatusChange></TbStatusChange></span>Status <span></span></h1>
            </div>
            <div className='font-bold text-3xl text-center mt-7 mx-10 text-white'>
                <div>
                    {/* <Living></Living> */}
                </div>
                <div className="mt-0">
                    {/* <Withdraw></Withdraw> */}
                </div>
                <div className="mt-0">
                    <Final></Final>
                </div>
                <div className="mt-10">
                    <Draft></Draft>
                </div>
            </div>
        </div>
    );
};

export default Status;