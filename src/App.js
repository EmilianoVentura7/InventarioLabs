import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/templates/login";
import Home from "./components/templates/Home";
import LaboratorioMaker from "./components/templates/ViewArticleMaker";
import LaboratorioQuimica from "./components/templates/ViewArticleQuimica";
import Users from "./components/templates/Users";
import { LabProvider } from "./components/atoms/LabContext"

function App() {
  return (
    <LabProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginLayout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/view-article-maker" element={<LaboratorioMaker />} />
          <Route
            path="/view-article-quimica"
            element={<LaboratorioQuimica />}
          />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </LabProvider>
  );
}

function LoginLayout() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Login />
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-80 h-80 bg-gradient-to-tr from-orange-500 to-indigo-900 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default App;
