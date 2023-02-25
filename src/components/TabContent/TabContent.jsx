import { useContext, useState } from "react";
import useRepositories from "../../hooks/useRepositories";

import { TabsNavigationContext } from "../../providers/TabsProvider/TabsNavigationProvider";

const ITEMS_PER_PAGE = 12;

const TabContent = () => {

    const [currentSortType, setCurrentSortType] = useState("stars");


    const { activeTab } = useContext(TabsNavigationContext);
    const { isLoading, data, error } = useRepositories({
        topic: activeTab,
        sort: currentSortType,
        itemsPerPage: ITEMS_PER_PAGE,
        //currentPage: currentPage
        currentPage: 1

    });

    return (
        <div className="tab-content">
            {console.log(data)}
        </div>
    )

}

export default TabContent;