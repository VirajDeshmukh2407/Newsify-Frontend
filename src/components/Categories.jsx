// // import React from "react";
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../pages/content.css";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// const Technology = (category) => {
//   const [news, setNews] = useState([]);
//   const [bookmarkedArticles, setBookmarkedArticles] = useState(() => {
//     const savedBookmarks = localStorage.getItem("bookmarkedArticles");
//     return savedBookmarks ? JSON.parse(savedBookmarks) : [];
//   });
//   const [bookmarkStatus, setBookmarkStatus] = useState([]);
//   // const [category, setCategory] = useState("general");

//   useEffect(() => {
//     AOS.init({
//       duration: 4000,
//       once: false,
//       mirror: true,
//     });

//     const fetchNews = async () => {
//       try {
//         const response = await axios.post(
//           // "http://localhost:5000/api/news",
//           `https://news-api-ei5a.vercel.app/api/news?category=${category}`,
//           JSON.stringify({
//             category: category,
//           }),
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         setNews(response.data.articles);
//       } catch (error) {
//         console.error("Error fetching news data:", error);
//       }
//     };

//     fetchNews();
//   }, [category]);

//   const truncateDescription = (description, maxLength) => {
//     if (!description) {
//       return "";
//     }

//     if (description.length > maxLength) {
//       return description.slice(0, maxLength) + "...";
//     }
//     return description;
//   };

//   const handleBookmark = (article, index) => {
//     const isAlreadyBookmarked = bookmarkedArticles.some(
//       (bookmarkedArticle) => bookmarkedArticle.title === article.title
//     );

//     if (!isAlreadyBookmarked) {
//       const updatedBookmarks = [...bookmarkedArticles, article];
//       setBookmarkedArticles(updatedBookmarks);
//       localStorage.setItem(
//         "bookmarkedArticles",
//         JSON.stringify(updatedBookmarks)
//       );

//       setBookmarkStatus((prevState) => ({
//         ...prevState,
//         [index]: true,
//       }));

//       setTimeout(() => {
//         setBookmarkStatus((prevState) => ({
//           ...prevState,
//           [index]: false,
//         }));
//       }, 2000);
//     }
//   };
//   return (
//     <div className="col-12 col-md-10 mx-auto focus">
//       <h2>News for Category:{category}</h2>

//       {news.map((article, index) => (
//         <div
//           key={index}
//           className="row card p-2 flex-column flex-lg-row"
//           data-aos="fade-up"
//         >
//           <div className="col-12 col-lg-6">
//             <img
//               src={article.urlToImage || "default-image.jpg"}
//               alt={article.title}
//               className="img img-fluid"
//             />
//           </div>
//           <div className="col-12 col-lg-6 text-content">
//             <h3>{article.title}</h3>
//             <p>{article.source.name}</p>
//             <p>{truncateDescription(article.description, 100)}</p>
//             <a
//               href={article.url}
//               className="text-decoration-none m-0 ml-2"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Article Link
//             </a>
//             <div
//               className="bookmark"
//               title="Bookmark"
//               onClick={() => handleBookmark(article, index)}
//             >
//               {bookmarkStatus[index] ? (
//                 <span>Bookmarked!</span>
//               ) : (
//                 <FontAwesomeIcon icon={faBookmark} className="text-center" />
//               )}{" "}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Technology;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/content.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Technology = ({ category }) => {
  const [news, setNews] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedArticles");
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });
  const [bookmarkStatus, setBookmarkStatus] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 4000,
      once: false,
      mirror: true,
    });

    const fetchNews = async () => {
      try {
        const response = await axios.post(
          `https://news-api-ei5a.vercel.app/api/news?category=${category}`,
          JSON.stringify({
            category: category,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, [category]);

  const truncateDescription = (description, maxLength) => {
    if (!description) {
      return "";
    }

    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const handleBookmark = (article, index) => {
    const isAlreadyBookmarked = bookmarkedArticles.some(
      (bookmarkedArticle) => bookmarkedArticle.title === article.title
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

  return (
    <div className="col-12 col-md-10 mx-auto focus">
      <h2>News for Category: {category}</h2>

      {news.map((article, index) => (
        <div
          key={index}
          className="row card p-2 flex-column flex-lg-row"
          data-aos="fade-up"
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
            <p>{truncateDescription(article.description, 100)}</p>
            <a
              href={article.url}
              className="text-decoration-none m-0 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Article Link
            </a>
            <div
              className="bookmark"
              title="Bookmark"
              onClick={() => handleBookmark(article, index)}
            >
              {bookmarkStatus[index] ? (
                <span>Bookmarked!</span>
              ) : (
                <FontAwesomeIcon icon={faBookmark} className="text-center" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technology;
