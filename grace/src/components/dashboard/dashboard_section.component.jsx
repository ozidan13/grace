// react
import React, { useState } from "react";
// MUI Components

// Styles css & Styled Components
import "./dashboard_section.styles.scss";
// Database
import { IMAGES } from "../../assets/images";
// Components
import ArticlesControl from "./articles_control/articles_control_section.component";
import UsersControl from "./user_controle/user_controle_section.component";
import axios from "axios";

function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);

  const getArticles = async () => {
    // Retrieve data from MongoDB and update articles state
    await fetch("http://127.0.0.1:5000/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addArticle = async (newArticle) => {
    // Send new article data to the database and update articles state
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:5000/articles", newArticle, config)
      .then((response) => {
        console.log("first");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteArticle = (articleId) => {
    // Delete article with given ID from the database and update articles state
    fetch(`http://localhost:5000/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(articleId);
        setArticles(articles.filter((article) => article._id !== articleId));
      });
  };

  const editArticle = (articleId, updatedArticle) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .put(
        `http://localhost:5000/articles/${articleId}`,
        updatedArticle,
        config
      )
      .then((data) => {
        setArticles(
          articles.map((article) => {
            if (article._id === articleId) {
              return data;
            } else {
              return article;
            }
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    // Retrieve data from MongoDB and update users state
    fetch("http://localhost:5000/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <img src={IMAGES.side_effects} alt="" className="sideeffect" />
      <div className="sidebar">
        <ArticlesControl
          articles={articles}
          getArticles={getArticles}
          addArticle={addArticle}
          deleteArticle={deleteArticle}
          editArticle={editArticle}
        />
        <UsersControl users={users} getUsers={getUsers} />
      </div>
    </>
  );
}

export default Dashboard;
