import "../css/card.css";
function TaskCard({tname}) {
    return (
        <div className="cardArea">
            <div className="name">{tname}</div>
            <div className="action">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;
