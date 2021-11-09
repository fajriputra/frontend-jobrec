import React from "react";

import "./index.scss";

const RightColumn = (props) => {
  return (
    <div className="right__column">
      <div className="content__heading">
        <h2 className="content__heading--title">{props.greeting}</h2>
        <p className="content__heading--subtitle">{props.subTitle}</p>
      </div>
      {props.children}
    </div>
  );
};

export default RightColumn;
