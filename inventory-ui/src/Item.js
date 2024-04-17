//Shows details for a specifc Item
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from 'react-icons/fa';
import './toggle.css';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./App";

const Item = () => {

    const {user} = useContext(AuthContext);

    const [item, setItem] = useState({item_name: "", quantity: "", description: ""});
    const [editEnabled, setEditEnabled] = useState(false);
    const [formData, setFormData] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/items/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [])

    const handleSubmit = () => {
        fetch(`http://localhost:8080/items/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
    }

    const handleDelete = () => {
        fetch(`http://localhost:8080/items`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: id})
        }).then(() => navigate('/myItems'));
    }

    return (
        <div className="item-details">
            <div className="item-header">
                <input className="item-name" type="text" onChange={(e) => setFormData({...formData, item_name: e.target.value})} defaultValue={item.item_name} readOnly={!editEnabled}/>
                {user.id?
                <>
                <FaTrash className="pointer" size={40} onClick={() => handleDelete()}/>
                <div>
                    <span>Edit Mode</span>
                    <label className="switch">
                        <input type="checkbox" onChange={() => setEditEnabled(!editEnabled)}/>
                        <span className="slider"></span>
                    </label>
                </div>
                </>
                : <></>}
            </div>
            <div style={{display: "flex"}}>
                <h2>Quantity: </h2><input className="item-quantity" type="number" onInput={(e) => setFormData({...formData, quantity: Number(e.target.value)})} defaultValue={item.quantity} readOnly={!editEnabled}/>
            </div>
            <h4>Description</h4>
            <textarea className="item-description" onChange={(e) => setFormData({...formData, description: e.target.value})} defaultValue={item.description} readOnly={!editEnabled}/>
            {editEnabled? <button onClick={() => handleSubmit()}>Submit Changes</button> : <></>}
        </div>
    )
}

export default Item;