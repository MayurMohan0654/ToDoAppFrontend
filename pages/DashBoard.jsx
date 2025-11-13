import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/dashboard.css";
import TaskCard from "../components/TaskCard";
const api = import.meta.env.VITE_SERVER_URL;

function DashBoard() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [tasks, setTasks] = useState([]);
    const [item, setItem] = useState("");

    async function authenticate() {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");   
            return;
        }

        const { data } = await axios.get(`${api}/auth/decode`, {
            headers: { authorization: token },
        });

        if (data.status == 200) {
            setName(data.data.username);
            const response = await axios.post(`${api}/item/get`, {
                username: data.data.username,
            });
            setTasks(response.data.data || []);
        } else {
            alert("server responded with: " + data.status);
        }
    }

    useEffect(() => {
        authenticate();
    }, []);

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const logout = async () => {
        localStorage.clear();
        return location.reload();
    };

    const addItem = async () => {
        const { data } = await axios.post(`${api}/item/add`, {
            username: name,
            task: item,
        });
        await authenticate();
    };

    return (
        <div className="bigBox">
            <center>
                <div>
                    <h1>
                        welcome {name}{" "}
                        <button
                            onClick={logout}
                            style={{ fontSize: "50%", marginLeft: "5rem" }}>
                            {" "}
                            Logout
                        </button>
                        {""}
                    </h1>
                </div>
            </center>

            <div className="mainContent">
                <div className="top">
                    <div className="addBar">
                        <input
                            type="text"
                            placeholder="enter"
                            onChange={(e) => {
                                setItem(e.target.value);
                            }}
                        />
                        <button onClick={addItem}>Add</button>
                    </div>
                </div>
                <div className="middle">
                    <div className="displayCard">
                        {tasks.length > 0 ? (
                            tasks.map((t, k) => (
                                <TaskCard key={k} tname={t.task} />
                            ))
                        ) : (
                            <p>No tasks found</p>
                        )}
                    </div>
                </div>
                <div className="bottom">bootom of mc</div>
            </div>
        </div>
    );
}

export default DashBoard;
