import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from './views/LandingPage.js';
import Login from './views/Login.js';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
