import { BiCategory } from 'react-icons/bi';
import TypeDraft from "../TypeDraft/TypeDraft";
import TypeSection from "../TypeSection/TypeSection";
import TypeWithdraw from "../TypeWithdraw/TypeWithdraw";

const Type = () => {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <h1 className="flex justify-center items-center shadow-2xl text-[#036666] mt-4 p-4 rounded-md font-semibold text-center text-4xl"><span className='mr-4'><BiCategory></BiCategory></span>Type - Category</h1>
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