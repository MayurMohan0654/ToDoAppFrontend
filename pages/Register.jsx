import axios from "axios";
import { Link } from "react-router-dom";
const api = import.meta.env.VITE_SERVER_URL;

function Register() {
    async function register() {
        const password = document.getElementById("password").value;
        const cpassword = document.getElementById("cpassword").value;
        const username = document.getElementById("username").value;

        if (!password || !username || !cpassword) {
            alert("fill all field");
        } else if (password == cpassword) {
           const { data } = await axios.post(`${api}/auth/register`, {username, password})
          //  console.log(data);
            if (data.status == 200) {
                alert("registrations successfull");
            } else if (data.status == 409) {
                alert("username already taken");
            } else {
                alert("regisration: server logic changed");
            }
        } else {
            alert("password mistmatched");
        }
    }

    return (
        <>
            <input type="text" id="username" placeholder="enter username" />
            <input type="text" id="password" placeholder="enter password" />
            <input type="text" id="cpassword" placeholder="confirm password" />
            <button onClick={register}>Submit</button>

            <div>
                <p>already have account? <Link to="/login">Login here</Link> </p>
                
            </div>
        </>
    );
}

export default Register;
