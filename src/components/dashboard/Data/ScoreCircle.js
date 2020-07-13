import { useRef, useEffect } from "react";

import styled, { useTheme } from "styled-components";

function ScoreCircle({ percent }) {
  const theme = useTheme();
  const circle = useRef();

  useEffect(() => {
    let radius = circle.current.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.current.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.current.style.strokeDashoffset = offset;
    }

    setProgress(percent);
  }, [percent]);

  return (
    <Wrapper>
      <svg width="90" height="90">
        <circle
          ref={circle}
          stroke={theme.palette.bgColor}
          strokeWidth="4"
          fill="transparent"
          r="37"
          cx="45"
          cy="45"
        ></circle>
      </svg>
      <Percent>{percent}</Percent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percent = styled.div`
  position: absolute;
  margin: 0 auto;
  font-size: 150%;
`;

export default ScoreCircle;
