import React, { useState } from "react";
import styled from "styled-components";

import LazyImage from "~/src/components/LazyImage";

function Right({ ...props }) {
  return (
    <ImgWrapper>
      <LazyImage {...props} />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  background-size: cover;
  background-position: center;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    width: 50%;
  }
`;

export default Right;
