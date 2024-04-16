import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

const HomeBar = () => {

    const {user} = useContext(AuthContext);

    const navigate = useNavigate();
    return (
        <>
        <div className="home-bar">
            <h1>Pip'ventory</h1>
            <button onClick={() => navigate('/items')}>All Items</button>
            <button onClick={() => navigate('/myItems')}>My Items</button>
            <button onClick={() => navigate('/createItem')}>Create Item</button>
            {user.id ? <></> : <button onClick={() => navigate('/login')}>Login</button>}
        </div>
        <Outlet />
        </>
    )
}

export default HomeBar;