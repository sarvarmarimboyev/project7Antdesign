import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { data } from "../../utilits/navbar";
import Blogbody from './Blogbody';


export default function Blog() {

  let blog = data.filter((i) => i.path === 'blog')[0].child;
  // console.log(design);
  return <> 
      <ul>
        {blog.map((i) => (
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
                <Route path={v.path} element={<Blogbody props={v.title} text={v.text}/>
                } />
              </Routes>
            ))}
          </>
        )
      })}
      <Outlet /></>
  
}
