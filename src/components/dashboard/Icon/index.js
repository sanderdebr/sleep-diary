import React from "react";
import styled from "styled-components";

import DashboardSVG from "~/public/icons/dashboard.svg";
import SettingSVG from "~/public/icons/settings.svg";

const icons = {
  dashboard: DashboardSVG,
  settings: SettingSVG,
};

function Icon({ icon, className }) {
  const IconComponent = icons[icon];
  return <IconComponent className={className} />;
}

const IconStyles = styled.div`
  background: purple;
`;

export default Icon;
