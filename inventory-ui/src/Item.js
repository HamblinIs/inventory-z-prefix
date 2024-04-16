//Shows details for a specifc Item
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = ({params}) => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/items/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [])

    return (
        <div className="item-details">
            <h1>{item.item_name}</h1>
            <h2>Quantity: {item.quantity}</h2>
            <h4>Description</h4>
            <h3>{item.description}</h3>
        </div>
    )
}

export default Item;