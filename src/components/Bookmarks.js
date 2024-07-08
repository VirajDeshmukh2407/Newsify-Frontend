import React, { useEffect, useState } from "react";

const Bookmarks = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedArticles");
    if (savedBookmarks) {
      setBookmarkedArticles(JSON.parse(savedBookmarks));
    }
  }, []);

  return (
    <div className="col-12 col-md-10 mx-auto">
      <h2 className="text-center p-1">Bookmarked Articles</h2>
      {bookmarkedArticles.length === 0 ? (
        <p>No bookmarks available.</p>
      ) : (
        bookmarkedArticles.map((article, index) => (
          <div key={index} className="row card p-2 flex-column flex-lg-row">
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
                className="text-decoration-none m-0 ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article Link
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
