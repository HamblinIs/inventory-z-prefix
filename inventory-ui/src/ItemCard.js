import React from "react";
import { useNavigate } from "react-router-dom";


// This isn't really a card anymore but I'll keep the name
const ItemCard = ({item}) => {

    const navigate = useNavigate();

    const description = item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description;
    return (
        <div className="card-body" onClick={() => {console.log("Clicked"); navigate(`/items/${item.id}`)}}>
            <h3>{item.item_name}</h3>
            <div className="card-description">{description}</div>
            <div>{item.quantity}</div>
        </div>
    )
}

export default ItemCard;