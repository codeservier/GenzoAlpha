// AppRoutes.js
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import HomePage from "../HomePage/HomePage";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
