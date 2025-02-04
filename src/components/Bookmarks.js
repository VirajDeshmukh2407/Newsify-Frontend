import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Bookmarks = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedArticles");
    if (savedBookmarks) {
      setBookmarkedArticles(JSON.parse(savedBookmarks));
    }
  }, []);

  const handleDeleteBookmark = (index) => {
    const updatedBookmarks = bookmarkedArticles.filter((_, i) => i !== index);
    setBookmarkedArticles(updatedBookmarks);
    localStorage.setItem(
      "bookmarkedArticles",
      JSON.stringify(updatedBookmarks)
    );
  };

  return (
    <div className="col-12 col-md-10 mx-auto">
      <h2 className="text-center p-1">Bookmarked Articles</h2>
      {bookmarkedArticles.length === 0 ? (
        <p className="text-white text-center">No bookmarks available.</p>
      ) : (
        bookmarkedArticles.map((article, index) => (
          <div
            key={index}
            className="row card p-2 flex-column flex-lg-row position-relative"
          >
            <div className="col-12 col-lg-6">
              <img
                src={article.urlToImage || "default-image.jpg"}
                alt={article.title}
                className="img img-fluid"
              />
            </div>
            <div className="col-12 col-lg-6 text-content">
              <h3>{article.title}</h3>
              <p>{article.source.name}</p>
              <p>{article.description}</p>
              <a
                href={article.url}
                className="btn btn-sm btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article Link
              </a>
            </div>
            <button
              className="btn btn-danger bottom-0 end-0 w-10 h-10 m-2"
              // className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
              onClick={() => handleDeleteBookmark(index)}
            >
              <FontAwesomeIcon icon={faTrash} className="font-size-10" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
