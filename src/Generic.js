import React from "react";
import { useLocation } from "react-router";

export default function Generic() {
const location = useLocation()
  return <div>{location.pathname}is coming soon</div>;
  
}
