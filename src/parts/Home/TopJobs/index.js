import PurpleBackground from "components/PurpleBackground";
import React from "react";

import "./index.scss";

export default function TopJobs(props) {
  return (
    <PurpleBackground className="sticky-top">
      <div className="container">
        <div className="topjobs__content">
          <h3 className="topjobs__content--text">Top Jobs</h3>
        </div>
      </div>
    </PurpleBackground>
  );
}
