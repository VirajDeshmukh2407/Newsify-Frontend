import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import "./pages/Header.css";
import Content from "./pages/content";
import Bookmarks from "./components/Bookmarks";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
