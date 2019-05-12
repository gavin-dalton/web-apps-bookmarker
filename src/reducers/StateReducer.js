const StateReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA_INIT':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        bookmarks: action.payload
      };
    case 'GET_DATA_FAILURE':
      // Can do some error handling here if needed
      return {
        ...state
      };
    default:
      throw new Error(`Reducer action type not defined: ${action.type}`);
  }
};

export default StateReducer;