import React from "react";
import "./App.css";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img src={props.avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.title}</p>
          <input
            type="text"
            onChange={props.onChangeInput}
            value={props.name}
          />
          <button className="button" onClick={props.onChangeName}>
            Change Name
          </button>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
