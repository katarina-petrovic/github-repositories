import { useContext } from "react";
import { TabsNavigationContext } from "../../providers/TabsProvider/TabsNavigationProvider";


const TabContent = () => {

    const { activeTab } = useContext(TabsNavigationContext);

    return (
        <div className="tab-content">
            {activeTab}
        </div>
    )

}

export default TabContent;