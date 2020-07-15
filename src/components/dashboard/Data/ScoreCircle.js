import { useRef, useEffect } from "react";

import styled, { useTheme } from "styled-components";

function ScoreCircle({ percent }) {
  const theme = useTheme();
  const circle = useRef();

  useEffect(() => {
    let radius = circle.current.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    circle.current.style.strokeDasharray = `${circumference} ${circumference}`;

    function getOffset(percent = 0) {
      return circumference - (percent / 100) * circumference;
    }

    function setProgress(percent) {
      const offset = getOffset(percent);
      circle.current.style.strokeDashoffset = offset;
      circle.current.style.opacity = 1;
    }

    setProgress(percent);
  }, [percent]);

  return (
    <Wrapper>
      <svg width="120" height="120">
        <circle
          ref={circle}
          stroke={theme.palette.tertiaryAction}
          stroke-dashoffset="328"
          strokeWidth="4"
          fill={theme.palette.bgColor}
          r="52"
          cx="60"
          cy="60"
        ></circle>
      </svg>
      <Percent>{percent}%</Percent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  circle {
    opacity: 0;
    transition: stroke-dashoffset 750ms ease-in-out;
  }
`;

const Percent = styled.div`
  position: absolute;
  margin: 0 auto;
  font-size: 150%;
  color: ${({ theme }) => theme.palette.tertiaryAction};
`;

export default ScoreCircle;
