import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard.tsx";
import Login from "./Dashboard/Login.tsx";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />{" "}
      </Routes>
    </Router>
  );
};

export default Main;
