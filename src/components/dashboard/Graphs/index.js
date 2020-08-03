import { useRef, useEffect, useState } from "react";

import styled, { useTheme } from "styled-components";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";

import { useAppContext } from "~/src/state/hooks";

import { H4 } from "~/src/components/shared/Text";

function Graphs() {
  const { activities, dispatch } = useAppContext();
  const graphBox = useRef();
  const [chart, setChart] = useState({ width: 300, height: 200 });
  const [data, setData] = useState([]);
  const theme = useTheme();

  const handleResize = () => {
    const { offsetWidth, offsetHeight } = graphBox.current;
    let width = offsetWidth - 20;
    let height = offsetHeight - 100;
    return setChart({ width, height });
  };

  useEffect(() => {
    if (activities) {
      let newData = activities.map((activity) => {
        const { day, deep_sleep, total_sleep, energy } = activity;
        return {
          day: moment(day).date().toString(),
          "Deep sleep": deep_sleep,
          "Total sleep": total_sleep,
          Energy: energy,
        };
      });

      setData(newData);
    }
  }, [activities]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (activity) => {
    dispatch({
      type: "setCurrentActivity",
      value: activity,
    });
  };

  return (
    <Wrapper>
      <Graph ref={graphBox}>
        <H4>Deep sleep</H4>
        <BarChart width={chart.width} height={chart.height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Deep sleep"
            fill={theme.palette.aurora.red}
            onClick={handleClick}
          />
        </BarChart>
      </Graph>
      <Graph ref={graphBox}>
        <H4>Total sleep</H4>
        <BarChart width={chart.width} height={chart.height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Total sleep"
            fill={theme.palette.aurora.orange}
            onClick={handleClick}
          />
        </BarChart>
      </Graph>
      <Graph ref={graphBox}>
        <H4>Energy levels</H4>
        <BarChart width={chart.width} height={chart.height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Energy"
            fill={theme.palette.aurora.green}
            onClick={handleClick}
          />
        </BarChart>
      </Graph>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: ${({ theme }) => theme.palette.bg};
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    flex-direction: row;
  }
`;

const Graph = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Graphs;
