import { useContext } from "react";
import { TabsNavigationContext } from "../../providers/TabsProvider/TabsNavigationProvider";
import './tab.scss';
const Tab = ({ label, value, icon }) => {
    const { activeTab, setActiveTab } = useContext(TabsNavigationContext);

    const handleTabClick = () => {
        setActiveTab(value);
    }
    return (
        <div onClick={handleTabClick} className={`tab ${activeTab === value ? 'active' : ""}`}>
            <img src={icon} alt={label} /> {label}
        </div>
    );
}

export default Tab;