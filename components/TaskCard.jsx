import "../css/card.css";
import axios from "axios";
const api = import.meta.env.VITE_SERVER_URL;


function TaskCard({tname, username, remove}) {
    const deleteItem = async () =>{
        console.log("tname: ", tname, " username: " , username);
        const {data} = await axios.post(`${api}/item/remove`, {username, "task":tname})
        if(data.status == 200){
            remove(tname);
        }else{
            console.log(data);
        }
    }

    return (
        <div className="cardArea">
            <div className="name">{tname}</div>
            <div className="action">
                <button>Edit</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;
