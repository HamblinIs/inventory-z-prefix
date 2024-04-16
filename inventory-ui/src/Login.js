import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

const Login = () => {

    const [formData, setFormData] = useState({username: "", password: ""});
    const [loginFailure, setLoginFailure] = useState(false);

    const {user, setUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = () => {
        fetch('http://localhost:8080/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.status === 201) {
                res.json().then((data) => {
                    setUser(data.userData);
                    navigate('/myItems');
                })
            } else {
                setLoginFailure(true);
            }
        })
    }

    return (
        <div className="login-card">
            <h2>Login</h2>
            <h3>Username</h3>
            <input type="text" onChange={(e) => setFormData({...formData, username: e.target.value})}/>
            <h3>Password</h3>
            <input type="text" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
            <button onClick={() => handleSubmit()}>Login</button>
            <div>Not a user yet?</div>
            <Link to='/register'>Register Here</Link>
            {loginFailure ?
            <div style={{color: "red"}}>Unsuccesful Login</div>
            :
            <></>}
        </div>
    )
}

export default Login;