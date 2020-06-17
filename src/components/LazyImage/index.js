import React from "react";

function LazyImage({ alt, src, placeholder }) {
  return <img alt={alt} src={src || placeholder} />;
}

export default LazyImage;
