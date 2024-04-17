import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

const Register = () => {
    const [formData, setFormData] = useState({username: "", password: "", first_name: "", last_name: ""});
    const [loginFailure, setLoginFailure] = useState(false);

    const {user, setUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = () => {
        fetch('http://localhost:8080/auth/signup', {
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
            <h3>First Name</h3>
            <input type="text" onChange={(e) => setFormData({...formData, first_name: e.target.value})}/>
            <h3>Last Name</h3>
            <input type="text" onChange={(e) => setFormData({...formData, last_name: e.target.value})}/>
            <h3>Username</h3>
            <input type="text" onChange={(e) => setFormData({...formData, username: e.target.value})}/>
            <h3>Password</h3>
            <input type="text" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
            <button onClick={() => handleSubmit()}>Register</button>
            <div>Already a user?</div>
            <Link to='/login'>Login Here</Link>
            {loginFailure ?
            <div style={{color: "red"}}>Unsuccesful Registration</div>
            :
            <></>}
        </div>
    )
}

export default Register;