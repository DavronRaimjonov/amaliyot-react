import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Shop from "../components/shop";
import Navbar from "../components/navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default Root;
