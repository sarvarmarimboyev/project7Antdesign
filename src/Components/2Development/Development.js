import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { data } from "../../utilits/navbar";
import Developmentbody from './Developmentbody';

export default function Development() {


  let development = data.filter((i) => i.path === 'development')[0].child;
  // console.log(design);
  return (
    <>
      <ul>
        {development.map((i) => (
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
                <Route path={v.path} element={<Developmentbody  props={v.title} text={v.text}/>
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
