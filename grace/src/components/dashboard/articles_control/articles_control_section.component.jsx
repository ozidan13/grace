// ArticlesControl.js
import React, { useState } from "react";

function ArticlesControl({
  articles,
  getArticles,
  addArticle,
  deleteArticle,
  editArticle,
}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [hint, setHint] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [editStatus, setEditStatus] = useState(false);
  const [editType, setType] = useState('Depression');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleHintChange = (event) => {
    setHint(event.target.value);
  };
  const fileInput = document.querySelector('input[type="file"]');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleAddArticle = (e) => {
    let formData = new FormData();
    formData.append("header", title);
    formData.append("body", text);
    formData.append("image", fileInput.files[0]);
    formData.append("hint", hint);
    formData.append("type", editType);
    e.preventDefault()
    addArticle(formData)
    window.location.reload();

  };

  const handleDeleteArticle = (articleId) => {
    deleteArticle(articleId);
  };

  const handleEditArticle = (articleId, updatedArticle) => {
    editArticle(articleId, updatedArticle);
  };

  return (
    <div className="articles-control">
      <h2>Articles Controlling</h2>
      <button onClick={getArticles}>View Current Articles</button>
      <form onSubmit={handleAddArticle} encType="multipart/form-data">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="text">hint:</label>
        <textarea id="hint" value={hint} onChange={handleHintChange}></textarea>
        <label htmlFor="text">Text:</label>
        <textarea id="text" value={text} onChange={handleTextChange}></textarea>
        <div className="form-group">
          <label htmlFor="selectOption1">Select a catogery:</label>{' '}
          {editType?

          `slected catogery: ${' '}${editType}`:''
          }
          <select  onChange={handleTypeChange} className="form-control" id="selectOption1">
            <option value="Depression" defaultValue>Depression</option>
            <option value="Anxiety disorders">Anxiety disorders</option> Depression Depression
            <option value="PTSD">PTSD</option>
            <option value="BPD">BPD</option>
          </select>
        </div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
        />

        <div>
          <button type="submit" className="d-inline-block w-25 mx-3 text-center p-2" >
            Add Article
          </button>
          {editStatus ?
            <button type="button" onClick={async () => {
              let formData2 = new FormData();
              formData2.append("header", title);
              formData2.append("body", text);
              if (fileInput.files.length > 0) {
                formData2.append("image", fileInput.files[0]);
              }
              formData2.append("hint", hint);
              formData2.append("type", editType);
              await handleEditArticle(currentId, formData2);
              window.location.reload();

            }} className="d-inline-block w-25 mx-3 text-center p-2" >
              save edit
            </button> : ''
          }
        </div>

      </form>
      <ul className="text-center " >
        {articles.map((article) => (
          <li className="mb-2" key={article._id}>
            <h3>{article.header}</h3>
            <img style={{ display: 'block', width: ' 100%', height: '220px' }} src={'http://localhost:5000/' + article.image} width='100%' height='100px' alt={article.title} />
            <button
              type="button"
              onClick={() => handleDeleteArticle(article._id)}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                setEditStatus(true)
                setTitle(article.header)
                setText(article.body)
                setHint(article.hint)
                setCurrentId(article._id)
                setType(article.type)
              }
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesControl;
