import EipsStatus from "../EipsStatus/EipsStatus";
import EipsStatusCards from "../EipsStatusCard/EipsStatusCards";
import EipsTypeAndCategories from "../EipsTypeAndCategories/EipsTypeAndCategories";
import LineChart from "../LineChart/LineChart";

const Home = () => {
    return (
        <div>
            <div>
                <EipsStatusCards></EipsStatusCards>
            </div>
            <div>
                {/* <EipsTypeAndCategories></EipsTypeAndCategories> */}
            </div>
            <div>
                <EipsStatus></EipsStatus>
            </div>
            <div>
                {/* <LineChart></LineChart> */}
            </div>
        </div>
    );
};

export default Home;