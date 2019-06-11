import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BookmarkContext } from '../context/BookmarkStore';
import { getLocalStorage, getMockStorage, removeLocalStorage } from '../utilities/localstorage';

const Bookmarks = (props) => {
  const [state, dispatch] = useContext(BookmarkContext);

  useEffect(() => {
    dispatch({ type: 'BM_LOADING' })
    // console.log('Bookmarks: effect...', state);
    setTimeout(() => {
      let storedData = {};
      // storedData = getLocalStorage('gd-bm-bookmarks');
      storedData = getMockStorage('gd-bm-bookmarks');
      // console.log('storedData: status...', storedData.statusOK);
      if (storedData.statusOK) {
        // console.log('Bookmarks: storedData...', storedData.data);
        dispatch({ type: 'BM_LOADED', payload: storedData.data });
        // if (state.hasChanged !== storedData.data.length) {
        //   dispatch({ type: 'BM_CHANGED', payload: storedData.data.length });
        // }
      } else {
        dispatch({ type: 'BM_EMPTY' });
      }
    }, 500);
    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.route]);

  const handleDelete = (e) => {
    e.preventDefault();
    const i = parseInt(e.target.dataset.id);
    dispatch({ type: 'BM_LOADING' })
    removeLocalStorage('gd-bm-bookmarks', state.bookmarks[i].siteId, 'siteId');
    setTimeout(() => {
      dispatch({ type: 'BM_LOADED', payload: getLocalStorage('gd-bm-bookmarks') });
    }, 500);
  };

  // console.log('Bookmarks: state...', state);
  // console.log('Bookmarks: props...', props);

  return (
    <>
      {!state.isLoading ? (
        !state.isEmpty ? (
          <div className="list-group mt-2 mr-2">
            {state.bookmarks.map((bookmark, index) => {
              if (bookmark.siteName.slice(0, 1) === props.route || props.route === '/') {
                return (
                  <div className="d-flex flex-nowrap align-items-center mb-2" key={index}>
                    <div className="w-100">
                      <a
                        className="list-group-item list-group-item-action gd-bm-link"
                        href={bookmark.siteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{bookmark.siteName}</a>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0">
                      <Link
                        className="btn btn-outline-success rounded-pill mx-2"
                        to={`/edit/${bookmark.siteId}`}
                      ><i className="far fa-edit gd-bm-icon"></i></Link>
                      <Link
                        className="btn btn-outline-danger rounded-pill"
                        to={`/delete/${bookmark.siteId}`}
                      ><i className="far fa-trash-alt gd-bm-icon"></i></Link>
                    </div>
                  </div>
                );
              } else { return null }
            })}
          </div>
        ) : (
            <h3 className="text-warning text-center m-5">Oops! You have no bookmarks.</h3>
          )
      ) : (
          <h3 className="text-secondary text-center m-5">Loading...</h3>
        )}
    </>
  );
};

export default Bookmarks;
