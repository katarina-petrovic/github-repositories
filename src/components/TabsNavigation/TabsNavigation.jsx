import Tab from "../Tab/Tab";
import TabContent from "../TabContent/TabContent";
import Tabs from "../Tabs/Tabs";

const TabsNavigation = () => {
    return (
        <>
            <Tabs>
                <Tab label="React" value="react" icon="" />
                <Tab label="Vue" value="vue" icon="" />
                <Tab label="Angular" value="angular" icon="" />
            </Tabs>
            <TabContent />
        </>
    );
}

export default TabsNavigation;