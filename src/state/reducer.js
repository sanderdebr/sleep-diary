export const reducer = (state, action) => {
  switch (action.type) {
    case "setTheme":
      return { ...state, currentTheme: action.value };
    default:
      throw new Error();
  }
};

export default reducer;
