
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./content.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import defaultImg from "../images/defaultImage.jpg";

const Content = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookmarkedArticles, setBookmarkedArticles] = useState(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedArticles");
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });
  const [bookmarkStatus, setBookmarkStatus] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const fetchNews = async () => {
      try {
        setLoading(true);
        // const response = await axios.get(`/api/news?category=${category}`);
        const response = await axios.get(`https://news-api-ei5a.vercel.app/api/news?category=${category}`);
        setNews(response.data.articles);
        setError(null);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  const truncateDescription = (description, maxLength) => {
    if (!description) return "";
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };

  const handleBookmark = (article, index) => {
    const isAlreadyBookmarked = bookmarkedArticles.some(
      (bookmarkedArticle) => bookmarkedArticle.url === article.url
    );

    if (!isAlreadyBookmarked) {
      const updatedBookmarks = [...bookmarkedArticles, article];
      setBookmarkedArticles(updatedBookmarks);
      localStorage.setItem(
        "bookmarkedArticles",
        JSON.stringify(updatedBookmarks)
      );

      setBookmarkStatus((prevState) => ({
        ...prevState,
        [index]: true,
      }));

      setTimeout(() => {
        setBookmarkStatus((prevState) => ({
          ...prevState,
          [index]: false,
        }));
      }, 2000);
    }
  };

  if (loading) {
    return <div className="text-center">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="col-12 col-md-10 mx-auto focus">
      <h2>News for Category: {category}</h2>

      {news.length === 0 ? (
        <div className="text-center">No articles found for this category.</div>
      ) : (
        news.map((article, index) => (
          <div
            key={index}
            className="row card p-2 flex-column flex-lg-row mb-3"
            data-aos="fade-up"
          >
            <div className="col-12 col-lg-6">
              <img
                src={article.urlToImage || defaultImg}
                alt={article.title}
                className="img img-fluid"
                onError={(e) => { e.target.src = defaultImg }}
              />
            </div>
            <div className="col-12 col-lg-6 text-content">
              <h3>{article.title}</h3>
              <p>{article.source.name}</p>
              <p>{truncateDescription(article.description, 100)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href={article.url}
                  className="btn btn-sm btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article
                </a>
                <div
                  className="bookmark cursor-pointer"
                  title="Bookmark"
                  onClick={() => handleBookmark(article, index)}
                >
                  {bookmarkStatus[index] ? (
                    <span className="text-success">Bookmarked!</span>
                  ) : (
                    <FontAwesomeIcon icon={faBookmark} className="text-center" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;