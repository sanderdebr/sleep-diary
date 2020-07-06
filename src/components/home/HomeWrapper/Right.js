import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LazyImage from "~/src/components/home/LazyImage";

function Right() {
  return (
    <ImgWrapper>
      <LazyImage
        alt="home-image"
        src="./images/home.webp"
        placeholder="./images/home-placeholder.jpg"
      />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-height: 350px;
  background-color: ${({ theme }) => theme.palette.primaryAction};
  border-radius: 0 ${({ theme }) => theme.general.borderRadius}px
    ${({ theme }) => theme.general.borderRadius}px 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0 ${({ theme }) => theme.general.borderRadius}px
      ${({ theme }) => theme.general.borderRadius}px 0;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-height: 100%;
    width: 50%;
  }
`;

export default Right;
