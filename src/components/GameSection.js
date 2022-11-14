
const GameSection = ({ id, activeTab, children }) => {
    return (
        activeTab === id ? <div>{children}</div>
            : null
    );
};

export default GameSection;