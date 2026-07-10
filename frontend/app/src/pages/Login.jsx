import api from "../api";

function Login() {

    const login = async () => {

        try {

            const res = await api.post("/login", {
                email: "TANISH25@gmail.com",
                pass: "TK_23@45"
            });

            alert(res.data.message);

        } catch (err) {
            alert("Login Failed");
            console.log(err);
        }

    };

    return (
        <div>
            <h1>Login Page</h1>

            <button onClick={login}>
                Login
            </button>
        </div>
    );
}

export default Login;