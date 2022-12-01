import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailMenuPage from "./pages/DetailMenuPage";
import axios from "axios";
import TransaksiPage from "./pages/TransaksiPage";
function App() {
  // status === 401 && navigate("/login");
  return (
    <div className="min-h-screen bg-slate-50">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/transaksi" element={<TransaksiPage />} />
          <Route path="/detail/:id" element={<DetailMenuPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
