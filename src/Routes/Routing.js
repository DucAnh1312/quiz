import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTING from "../config/ROUTING";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {ROUTING.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
};
export default Routing;
