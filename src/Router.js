import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Portfolio />} path="/portfolio"></Route>
      <Route element={<Contact />} path="/contact"></Route>
    </Routes>
  );
};
