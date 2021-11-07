import React from "react";

import propTypes from "prop-types";

export default function MetaWrapper(props) {
  return (
    <div className={props.className}>
      <h2 className={props.classTitle}>{props.title}</h2>
      <p className={props.classJobs}>{props.jobs}</p>
      <h5 className={props.classDesc}>{props.desc}</h5>

      {props.children}
    </div>
  );
}

MetaWrapper.propTypes = {
  className: propTypes.string,
  classTitle: propTypes.string,
  title: propTypes.string,
  classJobs: propTypes.string,
  jobs: propTypes.string,
  classDesc: propTypes.string,
  desc: propTypes.string,
};
