// react
import React from "react";
// MUI Components
import { Link } from "react-router-dom";
// Styles css & Styled Components
import "./articale _card.styles.scss";
// Database

function ArticaleCard(props) {
  return (
    <>
      <div className="articales_container_articale p-5   d-inline-block text-center m-auto" >
        <div className={`articale_card ${props.cardClass}`}>
          <div className="articale_card_title">
            <img src={'http://localhost:5000/'+props.image}  width='200px' height='200px' alt="icon" />
            <h1>{props.title}</h1>
          </div>
          <div className="articale_card_short_content">
            <p>{props.content}</p>
            <button className="articale_card_button">
              <Link to={`/articles/${props.articaleroute}`}>Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticaleCard;
