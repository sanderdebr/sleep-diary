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
      return { ...state, user: action.value };
    case "updateActivities":
      return {
        ...state,
        activities: action.value.activities,
        currentActivity: action.value.current,
        loading: false,
      };
    case "setCurrentActivity":
      return {
        ...state,
        currentActivity: action.value,
      };
    case "toggleLoading":
      return { ...state, loading: action.value };
    default:
      return state;
  }
};

export default reducer;
