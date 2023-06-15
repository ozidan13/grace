// react
import React from "react";
import { useEffect, useState } from "react";

// MUI Components

// Styled Components
// import { element } from "./Articleone.styles";
import "./index.styles.scss";
import ArticaleCard from "components/articales_section/articale _card/articales_container_section.component";
import { useNavigate } from "react-router-dom";
// Styles

async function getArticles() {
  return fetch("http://localhost:5000/articles")
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}

function Articles({ userData }) {

  const navigate = useNavigate()
  useEffect(() => {
    if (!userData.user.answerQuestuions && !localStorage.getItem('answerQuestuions')) {
      navigate('/questions')
    }
  }, [userData])

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data.articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles_container">
      {articles.map((article) => (
        article.type == localStorage.getItem('type') &&
        <ArticaleCard
          image={article.image}
          key={article._id}
          title={article.header}
          content={article.hint}
          articaleroute={article._id}
        />
      ))}
    </div>
  );
}

export default Articles;
