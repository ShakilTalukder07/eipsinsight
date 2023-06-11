import Living from "./Living/Living";
import Withdraw from "./Withdraw/Withdraw";

const Status = () => {
    return (
        <div className='font-bold text-3xl text-center mt-10 mx-10 text-white'>
            <div>
                <Living></Living>
            </div>
            <div className="mt-10">
                <Withdraw></Withdraw>
            </div>
        </div>
    );
};

export default Status;