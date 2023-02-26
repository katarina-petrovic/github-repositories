import './tabs.scss';

const Tabs = ({ children }) => {

    return (
        <div className="tabs-container">
            {children}
        </div>
    );
}

export default Tabs;