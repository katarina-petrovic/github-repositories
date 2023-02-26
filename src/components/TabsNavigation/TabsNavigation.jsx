import Tab from "../Tab/Tab";
import TabContent from "../TabContent/TabContent";
import Tabs from "../Tabs/Tabs";
import reactIcon from "../../assets/reactIcon.svg";
import angularIcon from "../../assets/angularIcon.svg";
import vueIcon from "../../assets/vueIcon.svg";


const TabsNavigation = () => {
    return (
        <>
            <Tabs>
                <Tab label="React" value="react" icon={reactIcon} />
                <Tab label="Vue" value="vue" icon={vueIcon} />
                <Tab label="Angular" value="angular" icon={angularIcon} />
            </Tabs>
            <TabContent />
        </>
    );
}

export default TabsNavigation;