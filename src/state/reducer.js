import theme from "~/src/common/styles/theme";

export const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      let newTheme = state.theme.id === "Day" ? theme.night : theme.day;
      return { ...state, theme: newTheme };
    default:
      throw new Error();
  }
};

export default reducer;
