import React, { useReducer } from 'react';
import { BookmarkReducer } from '../reducers/reducers';
import {
  isLocalStorage,
  // getMockStorage,
  getLocalStorage
} from '../utilities/localstorage';

/**
 * Helper function to fetch initial bookmark list
 * from local storage
 */
const getBookmarks = () => {
  let bookmarks = [];
  let storedData = {};
  if (isLocalStorage) {
    storedData = getLocalStorage('gd-bm-bookmarks');
    // storedData = getMockStorage('gd-bm-bookmarks');
    if (storedData.statusOK) {
      bookmarks = storedData.data;
    }
  }
  return bookmarks;
}

/**
 * Initial bookmarks context value
 */
const initBookmarks = {
  isLoading: true,
  isEmpty: false,
  bookmarks: getBookmarks()
};

export const BookmarkContext = React.createContext(initBookmarks);

const BookmarkStore = (props) => {
  const [state, dispatch] = useReducer(BookmarkReducer, initBookmarks);
  return (
    <BookmarkContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkStore;