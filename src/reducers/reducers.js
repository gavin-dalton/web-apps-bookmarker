/**
 * Bookmarks reducer function to mutate store data state
 * @param {any} state Data store state
 * @param {any} action Reducer action and payload
 */
export const BookmarkReducer = (state, action) => {
  console.log('BookmarkReducer: action...', action.type);
  switch (action.type) {
    case 'BM_LOADING':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'BM_FETCHED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        bookmarks: action.payload
      };
    case 'BM_FAILURE':
      // Can do some error handling here if needed
      return {
        ...state,
        isLoading: false,
        isError: true,
        bookmarks: action.payload
      };
    default:
      throw new Error(`Reducer action type not defined: ${action.type}`);
  }
};
