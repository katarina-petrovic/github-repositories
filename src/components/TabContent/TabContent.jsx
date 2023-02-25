import { useContext, useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import Loader from "../Loader/Loader";
import RepositoryList from "../RepositoryList/RepositoryList";
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

    if (isLoading) return <Loader />;
    if (error) return "try again";

    return (
        <div className="tab-content">
            <RepositoryList items={data.items} />
        </div>
    )

}

export default TabContent;