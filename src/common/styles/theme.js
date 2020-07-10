const general = {
  borderRadius: 20,
};

const palette = {
  day: {
    primary: "#4C566A",
    secondary: "#D8DEE9",
    tertiaryAction: "#81A1C1",
    bgColor: "#ECEFF4",
    bg: "#fff",
  },
  night: {
    primary: "#ECEFF4",
    secondary: "#434C5E",
    tertiaryAction: "#81A1C1",
    bgColor: "#2E3440",
    bg: "#3B4252",
  },
};

const media = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

const fontSizes = {
  p: 16,
};

const spacing = {
  gutter: 40,
};

const mixins = {
  boxShadow:
    "0 1px 1px rgba(0, 0, 0, 0.025), 0 2px 2px rgba(0, 0, 0, 0.025),0 4px 4px rgba(0, 0, 0, 0.025), 0 8px 8px rgba(0, 0, 0, 0.025), 0 16px 16px rgba(0, 0, 0, 0.025)",
  gradientBg: (startColor, endColor) => `background: ${startColor};
	background: -moz-linear-gradient(left,  ${startColor} 0%, endColor 80%,${endColor} 100%);
	background: -webkit-linear-gradient(left,  ${startColor} 0%, ${endColor} 80%,${endColor} 100%);
	background: linear-gradient(to right,  ${startColor} 0%, ${endColor} 80%,${endColor} 100%);`,
};

const theme = {
  general,
  media,
  fontSizes,
  spacing,
  mixins,
};

const night = {
  id: "Night",
  ...theme,
  palette: palette.night,
};

const day = {
  id: "Day",
  ...theme,
  palette: palette.day,
};

export default { night, day };
