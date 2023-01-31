import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import { data } from "../utilits/navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        {data.map((i) =>
          i.child ? (
            <>
              <Route path={i.path} element={i.element}>
                {i.child.map((v) => (
                  <Route path={v.path} />
                ))}
              </Route>
            </>
          ) : (
            <Route path={i.path} element={i.element} />
          )
        )}
      </Routes>
    </>
  );
}
