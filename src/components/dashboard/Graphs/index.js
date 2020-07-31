import { useRef, useEffect, useState } from "react";

import styled from "styled-components";
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

import { H4 } from "~/src/components/shared/Text";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Graphs() {
  const graphBox = useRef();
  const [chart, setChart] = useState({ width: 300, height: 200 });

  const handleResize = () => {
    const { offsetWidth, offsetHeight } = graphBox.current;
    let width = offsetWidth - 20;
    let height = offsetHeight - 100;
    return setChart({ width, height });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Graph ref={graphBox}>
        <H4>Deep sleep</H4>
        <BarChart width={chart.width} height={chart.height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </Graph>
      <Graph ref={graphBox}>
        <H4>Total sleep</H4>
        <BarChart width={chart.width} height={chart.height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </Graph>
      <Graph ref={graphBox}>
        <H4>Energy levels</H4>
        <BarChart width={chart.width} height={chart.height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </Graph>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: ${({ theme }) => theme.palette.bg};
  padding: ${({ theme }) => theme.spacing.inner}px;
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
