import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { data } from "./utilits/navbar";

export default function Navbar() {
    return (
        
        <>
        <div>
            {data.map((i) => (
                <span style={{ marginRight: '20px' }}>
                    <NavLink to={i.path}>{i.title}</NavLink>
                </span>
            ))}
        </div>
        
        <Outlet/>
            </>
    )
}
