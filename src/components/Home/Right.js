import React, { useState } from "react";
import styled from "styled-components";

import LazyImage from "~/src/components/LazyImage";

function Right() {
  return (
    <ImgWrapper>
      <LazyImage
        alt="home-image"
        src="./home.jpg"
        placeholder="./home-placeholder.jpg"
      />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primaryAction};
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    width: 50%;
  }
`;

export default Right;
