import React from "react";
import "./HomePageBody.css";
import GetExpeditions from "../expeditions/GetExpeditionsPage";
import HomeSlider from "./HomeSlider";
import "./HomePageBody.css";

function HomePageBody() {
    return (
        <div>
            <div id="homebodyleftblock">
                <div className="homeslider">
                    <HomeSlider />
                </div>
            </div>
            <div id="homebodyrightblock">
                <GetExpeditions />
            </div>
        </div>
    );
}
export default HomePageBody;
