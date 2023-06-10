import EipsStatus from "../EipsStatus/EipsStatus";
import EipsStatusCards from "../EipsStatusCard/EipsStatusCards";
import EipsTypeAndCategories from "../EipsTypeAndCategories/EipsTypeAndCategories";
import LineChart from "../LineChart/LineChart";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <EipsStatusCards></EipsStatusCards>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

                <div className="my-4 lg:my-10">
                    <EipsTypeAndCategories></EipsTypeAndCategories>
                </div>
                <div className="my-4 lg:my-10">
                    <EipsStatus></EipsStatus>
                </div>
            </div>
            <div>
                {/* <LineChart></LineChart> */}
            </div>
        </div>
    );
};

export default Home;