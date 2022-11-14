
const GameSection = ({ id, activeTab, children }) => {
    return (
        activeTab === id ? <div className="">{children}</div>
            : null
    );
};

export default GameSection;