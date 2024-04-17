import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

const CreateItem = () => {
    const {user, setUser} = useContext(AuthContext);

    const [formData, setFormData] = useState({user_id: user.id, item_name: "", description: "", quantity: 0});
    const [createFailure, setCreateFailure] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = () => {
        fetch('http://localhost:8080/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.status === 201) {
                res.json().then((data) => {
                    navigate('/myItems');
                })
            } else {
                setCreateFailure(true);
            }
        })
    }

    return (
        <div className="login-card">
            <h2>Create Item</h2>
            <h3>Item Name</h3>
            <input type="text" onChange={(e) => setFormData({...formData, item_name: e.target.value})}/>
            <h3>Description</h3>
            <textarea className="description-input" type="text" onChange={(e) => setFormData({...formData, description: e.target.value})}/>
            <h3>Quantity</h3>
            <input type="number" onChange={(e) => setFormData({...formData, quantity: e.target.value})}/>
            <button onClick={() => handleSubmit()}>Create Item</button>
            {createFailure ?
            <div style={{color: "red"}}>Unsuccesful Item Creation</div>
            :
            <></>}
        </div>
    )
}

export default CreateItem;