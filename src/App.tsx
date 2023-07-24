import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import PrivateRoute from "./components/core/PrivateRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import DoctorDetail from './pages/DoctorDetail';

import "./App.css";

/**
 * Manejo de estados globales
 * - Context API (React)
 * - useReducer (React)
 * - Redux Toolkit
 * - Redux Thunker
 * - Redux Sagas
 * - State Machines
 */

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Home />} />
          <Route path="/doctors/:doctorId" element={<PrivateRoute element={<DoctorDetail />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
