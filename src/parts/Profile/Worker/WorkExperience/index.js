import React from "react";
import work from "../../../../assets/images/workexperience.png";

import "./index.scss";

export default function WorkExperience(props) {
  // const urlParams = qs.parse(props.location.search);

  return (
    <div class="row work">
      <div class="row">
        <div class="col-2 work__image">
          <img src={work} alt="a" />
        </div>
        <div class="col-10 work__desc">
          <h2>Engineer</h2>
          <h5>Tokopedia</h5>
          <h6>July 2019 - January 2020 6 month</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            odio quis saepe ex, quas quidem quisquam facilis beatae, iure
            temporibus eligendi numquam necessitatibus perferendis laudantium
            aut doloribus repudiandae culpa corrupti?
          </p>
        </div>
      </div>
      <div class="col-2 work__image">
        <img src={work} alt="" />
      </div>
      <div class="col-10 work__desc">
        <h2>Web Developer</h2>
        <h5>Tokopedia</h5>
        <h6>July 2019 - January 2020 6 month</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          odio quis saepe ex, quas quidem quisquam facilis beatae, iure
          temporibus eligendi numquam necessitatibus perferendis laudantium aut
          doloribus repudiandae culpa corrupti?
        </p>
      </div>
    </div>
  );
}
