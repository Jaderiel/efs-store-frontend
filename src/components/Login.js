import React, { useState } from "react";
import api from "../api";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();
    try {
    const response = await api.post("/login", { email, password });
    console.log(response.data);
    } catch (error) {
    console.error("Login failed", error);
    }
};

return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
    </form>
    </div>
);
};

export default Login;
