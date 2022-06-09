import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cats } from "./pages/cats/Cats";
import { Contador } from "./pages/Counter";
import { Users } from "./pages/Users";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/counter">Contador</Link>
          </li>
          <li>
            <Link to="/"> Cats</Link>
          </li>
          <li>
            <Link to="/users"> users</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/counter" element={<Contador />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
