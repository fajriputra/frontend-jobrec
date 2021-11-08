import React from "react";

import "./index.scss";

export default function PurpleBackground(props) {
  return (
    <div className={["purple__background", props.className].join(" ")}>
      {props.children}
    </div>
  );
}
