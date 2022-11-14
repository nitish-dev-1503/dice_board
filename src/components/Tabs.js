import { useState } from "react";

import SevRoll from './SevRoll';
import Reach50 from './Reach50';
import TabItem from "./TabItem";
import GameSection from "./GameSection";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div>
            <ul className=" bg-primary_dark text-white font-medium flex w-1/2 m-auto items-center rounded-full">
                <TabItem title="SevRoll" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabItem title="Reach50" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>

            <GameSection id="tab1" activeTab={activeTab}>
                <SevRoll />
            </GameSection>
            <GameSection id="tab2" activeTab={activeTab}>
                <Reach50 />
            </GameSection>

        </div>
    );
}

export default Tabs;