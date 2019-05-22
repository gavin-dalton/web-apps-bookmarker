import React, { useReducer } from 'react';
import { BookmarkReducer } from '../reducers/reducers'

const initBookmarks = {
  isLoading: false,
  isError: false,
  bookmarks: []
};

//{ siteName: '', siteURL: '' }

export const BookmarkContext = React.createContext(initBookmarks);

const BookmarkStore = ({ children }) => {
  const [state, dispatch] = useReducer(BookmarkReducer, initBookmarks);
  return (
    <BookmarkContext.Provider value={[state, dispatch]}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkStore;