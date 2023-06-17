import { useState } from "react";
import HomeLiving from "./HomeLiving/HomeLiving";
import HomeWithdraw from "./HomeWithdraw/HomeWithdraw";
import './HomeStatus.css'

const HomeStatus = () => {

    const [insight, setInsight] = useState(1)

    return (
        <>
            <div className="chart-heading-container">
                <button
                    className={insight == 1 ? 'chart-heading-active' : 'chart-heading'}
                    onClick={() => setInsight(1)}
                >
                    Insights
                </button>
                <button
                    className={insight == 0 ? 'chart-heading-active' : 'chart-heading'}
                    onClick={() => setInsight(0)}
                >
                    Yearly Insights
                </button>
            </div>
            {
                insight === 1 ? (
                    <div className="my-4 lg:my-10 mx-12">
                        <HomeLiving></HomeLiving>
                    </div>
                ) : (
            <div className="my-4 lg:my-10 mx-12">
                <HomeWithdraw></HomeWithdraw>
            </div>
            )
            }
            {/* <div className="flex justify-center items-center">


            </div> */}
        </>
    );
};

export default HomeStatus;