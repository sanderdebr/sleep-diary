import theme from "~/src/common/styles/theme";

const persistTheme = (newTheme) =>
  window.localStorage.setItem("theme", JSON.stringify(newTheme));

export const reducer = (state, action) => {
  let newTheme;

  switch (action.type) {
    case "setTheme":
      newTheme = action.value === "Night" ? theme.night : theme.day;
      persistTheme(newTheme);
      return { ...state, theme: newTheme };
    case "toggleTheme":
      newTheme = state.theme.id === "Day" ? theme.night : theme.day;
      persistTheme(newTheme);
      return { ...state, theme: newTheme };
    case "updateUser":
      return { ...state, session: { ...state.session, user: action.value } };
    case "updateActivities":
      return { ...state, activities: action.value };
    default:
      throw new Error();
  }
};

export default reducer;
