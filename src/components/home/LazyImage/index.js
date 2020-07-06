import React, { useState, useEffect } from "react";
import styled from "styled-components";

function LazyImage({ alt, src, placeholder }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    let imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => setImage(imageLoader.src);
  }, []);

  return <StyledImg alt={alt} image={image} src={image || placeholder} />;
}

const StyledImg = styled.img`
  filter: ${({ image }) => (image ? "blur(0px)" : "blur(2px)")};
`;

export default LazyImage;
