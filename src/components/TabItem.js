
const TabItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={`tab ${activeTab === id && " bg-primary"}`}>{title}</li>
    );
};

export default TabItem;