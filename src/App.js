// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./pages/Header";
// import "./pages/Header.css";
// import Content from "./pages/content";
// import Bookmarks from "./components/Bookmarks";

// function App() {
//   return (
//     <Router>
//       <div className="container-fluid">
//         <Header />
//         <div className="row">
//           <Routes>
//             <Route path="/" element={<Content />} />
//             <Route path="/bookmarks" element={<Bookmarks />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./pages/Header";
// import "./pages/Header.css";
// import Content from "./pages/content";
// import Bookmarks from "./components/Bookmarks";

// function App() {
//   const [category, setCategory] = useState("general");

//   return (
//     <Router>
//       <div className="container-fluid">
//         <Header setCategory={setCategory} />
//         <div className="row">
//           <Routes>
//             <Route path="/" element={<Content category={category} />} />
//             <Route path="/bookmarks" element={<Bookmarks />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import "./pages/Header.css";
import Content from "./pages/content";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [category, setCategory] = useState("general"); // Initial category state

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
