import React, { useState, useEffect, useContext } from 'react';
import collection from 'lodash/collection';
import { BookmarkContext } from '../context/BookmarkStore';
import { saveLocalStorage } from '../utilities/localstorage';

const Delete = (props) => {
  const [bookmark, setBookmark] = useState({ index: -1, id: '' });
  const [state, dispatch] = useContext(BookmarkContext);

  useEffect(() => {
    const param = props.match.params.id.split('~');
    // console.log('Delete: param..........', param);
    if (param.length > 0) {
      setBookmark({
        index: parseInt(param[0]),
        id: param[1]
      })
    }
    // Effect clean-up
    // console.log('Delete: effect clean-up');
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleYes = (e) => {
    e.preventDefault();
    // Reduce bookmark list
    const bookmarks = collection.filter(state.bookmarks, (o) => { return o.siteId !== bookmark.id });
    // Reset bookmark else error on last entry
    setBookmark({ index: -1, id: '' });
    // Save to local storage and dispatch to context
    saveLocalStorage('gd-bm-bookmarks',bookmarks);
    dispatch({ type: 'BM_SAVE', payload: bookmarks });
    // Go back to previous URL
    props.history.goBack();
  };

  const handleNo = (e) => {
    e.preventDefault();
    props.history.goBack();
  };

  // console.log('Delete: props.............', props);
  // console.log('Delete: bookmark..........', bookmark);
  // console.log('Delete: state.bookmarks...', state.bookmarks);

  return (
    <div className="container">
      <div className="border border-primary rounded-lg my-2 p-3">
        {bookmark.index > -1 ? (
          <h4>{`Continue to delete bookmark: ${state.bookmarks[bookmark.index].siteName}`}</h4>
        ) : (null)}
        <div className="mt-3">
          <button
            className="btn btn-outline-danger"
            onClick={handleYes}
          >YES</button>
          <button
            className="btn btn-outline-success ml-2"
            onClick={handleNo}
          >NO</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
