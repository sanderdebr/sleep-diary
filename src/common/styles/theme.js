const palette = {
  primary: "#1d1a4d",
  secondary: "#908fa8",
  primaryAction: "#0054ff",
  secondaryAction: "#ff384f",
  tertiaryAction: "#7847f3",
  bgColor: "#f6f5fa",
};

const media = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
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
  palette,
  media,
  spacing,
  mixins,
};

export default theme;
