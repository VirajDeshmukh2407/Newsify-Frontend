import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import "./pages/Header.css";
import Content from "./pages/content";
import Bookmarks from "./components/Bookmarks";
import Categories from "./components/Categories";

function App() {
  const [category, setCategory] = useState("general");

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <Router>
      <div className="container-fluid">
        <Header onCategoryClick={handleCategoryClick} />
        <div className="row">
          <Routes>
            <Route path="/" element={<Content category={category} />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route
              path="/:category"
              element={<Categories category={category} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
