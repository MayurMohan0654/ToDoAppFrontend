import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const api = import.meta.env.VITE_SERVER_URL;

function Login() {
    const navigate = useNavigate();

    const login = async () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const { data } = await axios.post(`${api}/auth/login`, {
            username,
            password,
        });
        console.log("data: " + JSON.stringify(data));

        if (data.status == 200) {
            alert("login successfull");
            localStorage.setItem("token", data.token);
            window.location.href = "/";
        } else if (data.status == 404) {
            alert("User not found");
        } else if (data.status == 401) {
            alert("wrong credencials");
        } else {
            alert("data: " + data);
        }
    };

    const RegDir = () => {
        navigate("/register");
    };

    return (
        <>
            <input type="text" id="username" placeholder="enter username" />
            <input type="text" id="password" placeholder="enter password" />
            <button onClick={login}>Submit</button>
            <Link to="/register">Register here</Link>
        </>
    );
}

export default Login;
