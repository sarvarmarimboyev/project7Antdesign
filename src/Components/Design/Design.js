import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { data } from "../../utilits/navbar";
import Designbody from "../Designbody";

export default function Design() {


  let design = data.filter((i) => i.path === 'design')[0].child;
  // console.log(design);
  return (
    <>
      <ul>
        {design.map((i) => (
          <NavLink to={i.path}>
          <h1>{i.title}</h1>
            </NavLink>
            
        ))}
      </ul>
      {data.map((i) => {
        return (
          <>
            {i.child?.map((v) => (
              <Routes key={v.id}>
                <Route path={v.path} element={<Designbody props={v.title} text={v.text}/>
                } />
              </Routes>
            ))}
          </>
        )
      })}
      <Outlet />
    </>
  )
}
