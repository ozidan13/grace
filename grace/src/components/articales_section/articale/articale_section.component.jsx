// react
import React from "react";
// MUI Components
import "./articale_section.styles.scss";

// Styles css & Styled Components
// Database
function ArticaleSection(props) {
  return (
    <>

      <div className="articale_container">
        <dv className="articale_body">
          <section className="articale_section_content">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
          </section>
          <section className="articale_section_image">
          <img  src={'http://localhost:5000/' + props.image}  width={'500px'}  alt="" />
          </section>
        </dv>
      </div>

    </>
  );
}

export default ArticaleSection;
