import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateAgreement from "./pages/CreateAgreement";
import ViewAgreement from "./pages/ViewAgreement";
import UpdateAgreement from "./pages/UpdateAgreement";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateAgreement />} />
          <Route path="/view/:id" element={<ViewAgreement />} />
          <Route path="/update/:id" element={<UpdateAgreement />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
