import EipsStatusPieChart from "../EipsStatusPieChart/EipsStatusPieChart";
import EipsStatusCards from "../EipsStatusCard/EipsStatusCards";
import EIPsTable from "../EIPsTable/EIPsTable";
import EipsTypeDonughtChart from "../EipsTypeDonughtChart/EipsTypeDonughtChart";


const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <EipsStatusCards></EipsStatusCards>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

                <div className="my-4 lg:my-10">
                    <EipsTypeDonughtChart></EipsTypeDonughtChart>
                </div>
                <div className="my-4 lg:my-10">
                    <EipsStatusPieChart></EipsStatusPieChart>
                </div>
            </div>
            <div>
                {/* <EIPsTable></EIPsTable> */}
            </div>
        </div>
    );
};

export default Home;