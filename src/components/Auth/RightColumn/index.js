import React, { useState, useEffect } from "react";
import qs from "querystring";
import FormRecruiter from "./FormRecruiter";
import FormWorker from "./FormWorker";

import "./index.scss";

const RightColumn = (props) => {
  const [showWorker, setShowWorker] = useState(false);

  // useEffect(() => {
  //   setShowWorker(showWorker);
  // }, [showWorker]);

  // const urlParams = qs.parse(props.location.search);
  // console.log(props);

  return (
    <div className="right__column">
      <div className="content__heading">
        <h2 className="content__heading--title">Halo, Pewpeople!</h2>
        <p className="content__heading--subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </div>
      <form className="form__input">
        {showWorker ? <FormWorker /> : <FormRecruiter />}
      </form>

      {props.children}
    </div>
  );
};

export default RightColumn;
