/**
 * Bookmarks reducer function to mutate store state
 * @param {any} state Current state
 * @param {any} action Reducer action type and payload
 */
export const BookmarkReducer = (state, action) => {
  // console.log('BookmarkReducer: action type......', action.type);
  // console.log('BookmarkReducer: action payload...', action.payload);
  switch (action.type) {
    case 'BM_LOADING':
      return {
        ...state,
        isLoading: true,
        isEmpty: false
      };
    case 'BM_LOADED':
      return {
        ...state,
        isLoading: false,
        isEmpty: false
      };
    case 'BM_EMPTY':
      return {
        ...state,
        isLoading: false,
        isEmpty: true
      };
    case 'BM_SAVE':
      return {
        ...state,
        isLoading: false,
        isEmpty: false,
        bookmarks: action.payload
      };
    default:
      throw new Error(`Reducer action type not defined: ${action.type}`);
  }
};
