import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import router from "../config/router";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
};
export default Routing;
