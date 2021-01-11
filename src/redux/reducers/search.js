const defaultState = { search: "php" };

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SEARCH_TEXT":
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
}

export default reducer;
