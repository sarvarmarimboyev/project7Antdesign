import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { data } from "../../utilits/navbar";
import Qomponentbody from './Qomponentbody';

export default function Qomponent() {


  let qomponent = data.filter((i) => i.path === 'components')[0].child;
  // console.log(design);
  return (
    <>
      <ul>
        {qomponent.map((i) => (
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
                <Route path={v.path} element={<Qomponentbody  props={v.title} text={v.text}/>
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
