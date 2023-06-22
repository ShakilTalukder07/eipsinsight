import { useState } from "react";
import HomeWithdraw from "./HomeWithdraw/HomeWithdraw";
import './HomeStatus.css'
import HomeDraft from "./HomeDraft/HomeDraft";
import HomeFinal from "./HomeFinal/HomeFinal";
import HomeLiving from "./HomeLiving/HomeLiving";

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
                    <div>
                        <div className="my-4 lg:my-10 mx-12">
                            <HomeWithdraw></HomeWithdraw>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="my-4 lg:my-10 mx-12">
                            <HomeLiving></HomeLiving>
                        </div>
                        <div className="my-4 lg:my-10 mx-12">
                            <HomeDraft></HomeDraft>
                        </div>
                        <div className="my-4 lg:my-10 mx-12">
                            <HomeFinal></HomeFinal>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default HomeStatus;