import { BiCategory } from 'react-icons/bi';
import TypeDraft from "../TypeDraft/TypeDraft";
import TypeSection from "../TypeSection/TypeSection";
import TypeWithdraw from "../TypeWithdraw/TypeWithdraw";

const Type = () => {

    return (
        <div>
            <div className='flex justify-between'>

                <h1 className="flex justify-center items-center bg-[#10B981] font-bold text-2xl p-2 mt-4 h-14 w-60 rounded-md text-white"><span className='mr-1'><BiCategory></BiCategory></span> Type - Category</h1>

                {/* <h1 className="flex justify-center items-center bg-[#10B981] font-bold text-2xl p-2 mt-4 h-14 w-60 rounded-md text-white">Total EIPs - <span className='ml-1'>336</span></h1> */}

            </div>
            <div className='mt-2'>
                <TypeSection></TypeSection>
            </div>
            <div className="my-4 lg:my-10 mx-12">
                <TypeWithdraw></TypeWithdraw>
            </div>
            <div className="my-4 lg:my-10 mx-12">
                <TypeDraft></TypeDraft>
            </div>
        </div>
    );
};

export default Type;