import TypeDraft from "../TypeDraft/TypeDraft";
import TypeSection from "../TypeSection/TypeSection";
import TypeWithdraw from "../TypeWithdraw/TypeWithdraw";

const Type = () => {

    return (
        <div>
            <div>
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