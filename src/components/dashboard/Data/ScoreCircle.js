import { useRef, useEffect } from "react";

import styled from "styled-components";

function ScoreCircle({ percent }) {
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
      <svg width="120" height="120">
        <circle
          ref={circle}
          stroke="white"
          stroke-width="4"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        ></circle>
      </svg>
      <Percent>{percent}</Percent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.inner}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percent = styled.div`
  position: absolute;
  margin: 0 auto;
  font-size: 200%;
`;

export default ScoreCircle;
