import EipsStatusPieChart from "../EipsStatusPieChart/EipsStatusPieChart";
import EipsStatusCards from "../EipsStatusCard/EipsStatusCards";
import LineChart from "../LineChart/LineChart";
import EipsStatusBarChart from "../EipsStatusBarChart/EipsStatusBarChart";
import StatusCardsLineChart from "../StatusCardsLineChart/StatusCardsLineChart";


const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <EipsStatusCards></EipsStatusCards>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

                <div className="my-4 lg:my-10">
                    <EipsStatusBarChart></EipsStatusBarChart>
                </div>
                <div className="my-4 lg:my-10">
                    <EipsStatusPieChart></EipsStatusPieChart>
                </div>
            </div>
            <div>
                <StatusCardsLineChart></StatusCardsLineChart>
            </div>
        </div>
    );
};

export default Home;