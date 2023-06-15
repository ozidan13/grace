import React, { useEffect, useState } from "react";
import ArticaleSection from "components/articales_section/articale/articale_section.component";
import { useParams } from "react-router-dom";

function getArticleById(id) {
  return fetch(`http://localhost:5000/articles/${id}`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}

function ArticaleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await getArticleById(id);
      setArticle(data.article);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <ArticaleSection
        title={article.header}
        body={article.body}
        image={article.image}
      />
    </div>
  );
}

export default ArticaleDetails;
