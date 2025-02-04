import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faNewspaper,
  faFire,
  faBookmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Img1 from "../images/india_img.png";
import Img2 from "../images/sports.png";
import Img3 from "../images/politics.png";
import Img4 from "../images/education.png";
import Img5 from "../images/health.png";
import Img6 from "../images/bus.png";
import Img10 from "../images/technology.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ onCategoryClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    // navigate(`/${category}`);
    navigate(`/category/${category}`);
    toggleSidebar();
  };

  return (
    <div>
      <nav className="col-12 bg-blackk text-white py-0">
        <div className="d-flex justify-content-between align-items-center">
          <button className="iconbtn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="icons" />
          </button>
          <h3 className="color1 text-center flex-grow-1 ">Newsify</h3>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div>
          <div className="s-header d-flex">
            <h4 className="h4tag">Categories</h4>
            <FontAwesomeIcon
              icon={faXmark}
              className="close"
              onClick={toggleSidebar}
              title="Close"
            />
          </div>
          <div className="btn-style d-flex justify-content-around align-items-center mt-3">
            <Link
              className="btn-groups text-decoration-none text-center"
              to="/"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faNewspaper} />
              <p>News</p>
            </Link>
            <Link
              className="btn-groups text-decoration-none text-center"
              to="/"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faFire} />
              <p>Trending</p>
            </Link>
            <Link
              to="/bookmarks"
              className="btn-groups text-decoration-none text-center"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faBookmark} />
              <p>Bookmarks</p>
            </Link>
          </div>

          <div className="topics mt-3">
            <h4 className="title">TOPICS</h4>
            <hr />

            <div className="card-container row p-3  ">
              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("general")}
                >
                  <img src={Img1} alt="" className="img1 img-fluid " />
                  <h5>General</h5>
                </button>
              </div>
              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("sports")}
                >
                  <img src={Img2} alt="" className=" img-fluid " />
                  <h5>Sports</h5>
                </button>
              </div>
              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("entertainment")}
                >
                  <img src={Img3} alt="" className=" img-fluid " />
                  <h5>Entertainment</h5>
                </button>
              </div>
              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("science")}
                >
                  <img src={Img4} alt="" className=" img-fluid " />
                  <h5>Science</h5>
                </button>
              </div>
              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("health")}
                >
                  <img
                    src={Img5}
                    alt=""
                    className="d-flex align-items-center justify-content-center  img-fluid "
                  />
                  <h5>Health</h5>
                </button>
              </div>
              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("business")}
                >
                  <img src={Img6} alt="" className=" img-fluid " />
                  <h5>Business</h5>
                </button>
              </div>

              <div className="col-6">
                <button
                  className="card1"
                  onClick={() => handleCategoryClick("technology")}
                >
                  <img src={Img10} alt="" className=" img-fluid img7" />
                  <h5>Technology</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
