import Draft from "./Draft/Draft";
import Final from "./Final/Final";
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
            <div className="mt-10">
                <Draft></Draft>
            </div>
            <div className="mt-10">
                <Final></Final>
            </div>
        </div>
    );
};

export default Status;