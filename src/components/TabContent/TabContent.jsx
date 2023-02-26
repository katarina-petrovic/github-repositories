import { useContext, useState } from "react";
import './tabContent.scss';
import useRepositories from "../../hooks/useRepositories";
import Loader from "../Loader/Loader";
import RepositoryList from "../RepositoryList";
import Pagination from "../Pagination";
import SortOptions from "../SortOptions";
import { TabsNavigationContext } from "../../providers/TabsProvider/TabsNavigationProvider";

const ITEMS_PER_PAGE = 12;

const TabContent = () => {
    const [currentSortType, setCurrentSortType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { activeTab } = useContext(TabsNavigationContext);
    const { isLoading, data, error } = useRepositories({
        topic: activeTab,
        sort: currentSortType,
        itemsPerPage: ITEMS_PER_PAGE,
        currentPage: currentPage
    });

    // pagination functions
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage !== Math.ceil(100 / ITEMS_PER_PAGE)) {
            setCurrentPage(currentPage + 1);
        }
    };
    // Sort Options
    const handleSortChange = (value) => {
        setCurrentSortType(value);
        setCurrentPage(1);
    }
    if (isLoading) return <Loader />;
    if (error) return "try again";

    return (
        <div className="tab-content">
            <SortOptions sortType={currentSortType} setCurrentSortType={handleSortChange} />
            <RepositoryList items={data.items} />
            <Pagination
                postsPerPage={ITEMS_PER_PAGE}
                totalPosts={100}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                currentPage = {currentPage}
            />
        </div>
    )
}

export default TabContent;