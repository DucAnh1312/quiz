import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routerConfig from "../config/routerConfig";
import Error from "../components/NotFound/Error";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        {routerConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default RouterComponent;
