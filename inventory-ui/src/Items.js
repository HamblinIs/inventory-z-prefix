// Displays many items
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./App";
import ItemCard from "./ItemCard";

const Items = ({type}) => {

    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [fetchEndpoint, setFetchEndpoint] = useState("http://localhost:8080/items");

    // Probably do this differently if there is more than two types
    

    useEffect(() => {
        fetch(fetchEndpoint)
        .then(res => res.json())
        .then(data => setItems(data));
    }, [fetchEndpoint])

    useEffect(() => {
       let endpoint = type === 'user' && user.id ? `http://localhost:8080/user/${user.id}/items` : "http://localhost:8080/items";
       setFetchEndpoint(endpoint);
    }, [type])

    return (
        <>
        <div className="col-headers">
            <div>Item Name</div>
            <div>Description</div>
            <div>Quantity</div>
        </div>
        {items.length > 0 ? items.map(item => {
             return (
                <ItemCard key={item.id} item={item} />
            )
        })
        :
        <div>No Items To Display</div>
        }
        </>
    )
}

export default Items;