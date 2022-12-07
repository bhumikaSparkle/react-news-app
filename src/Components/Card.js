import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card-wrapper">
        <span className="tag">{props.source}</span>
        <img src={props.urlToImage} alt="newsImg" className="card-img" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <p className="card-text text-muted">
            By {props.author ? props.author : "Unknown"} on {new Date(props.date).toDateString()}
          </p>
          <a
            href={props.url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
