import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Portfolio />} path="/portfolio" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};
