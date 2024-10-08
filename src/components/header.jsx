import React from "react";

const style = {
  text : {
    color : "#ec6408"
  }
}
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="col-md-8 col-md-offset-2 intro-text">
          <h1 style={style.text}>
            {props.data ? props.data.title : "Loading"}
            <span></span>
          </h1>
          <p style={style.text}>{props.data ? props.data.paragraph : "Loading"}</p>
          <a
            href="#features"
            className="btn btn-custom btn-lg page-scroll"
          >
            Learn More
          </a>{" "}
        </div>
      </div>
    </header>
  );
};
