import EipsStatusPieChart from "../EipsStatusPieChart/EipsStatusPieChart";
import EipsStatusCards from "../EipsStatusCard/EipsStatusCards";
import EIPsTable from "../EIPsTable/EIPsTable";
import EipsTypeDonughtChart from "../EipsTypeDonughtChart/EipsTypeDonughtChart";
import AllEipsBarChart from "../AllEipsBarChart/AllEipsBarChart";


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
            <div className="my-4 lg:my-10 mx-12">
                <AllEipsBarChart></AllEipsBarChart>
            </div>
            <div className="my-4 lg:my-10 mx-12">
                <EIPsTable></EIPsTable>
            </div>
        </div>
    );
};

export default Home;