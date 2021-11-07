import React from "react";
import propTypes from "prop-types";

export default function Image(props) {
  return (
    <figure className={props.className}>
      <img
        src={props.srcImage}
        alt={props.altImage}
        className={props.imageClass}
      />
    </figure>
  );
}

Image.propTypes = {
  className: propTypes.string,
  srcImage: propTypes.string,
  altImage: propTypes.string,
  imageClass: propTypes.string,
};
