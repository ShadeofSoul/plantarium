import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/event/*" element={<EventRoutes />} />
      <Route path="/service/*" element={<ServiceRoutes />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
