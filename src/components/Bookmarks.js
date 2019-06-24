import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BookmarkContext } from '../context/BookmarkStore';

const Bookmarks = (props) => {
  const [state, dispatch] = useContext(BookmarkContext);

  useEffect(() => {
    // dispatch({ type: 'BM_LOADING' })
    // setTimeout(() => {
      if (state.bookmarks.length > 0) {
        dispatch({ type: 'BM_LOADED' });
      } else {
        dispatch({ type: 'BM_EMPTY' });
      }
    // }, 500);
    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.route]);

  // console.log('Bookmarks: state...', state);
  // console.log('Bookmarks: props...', props);

  return (
    <>
      {!state.isLoading ? (
        !state.isEmpty ? (
          <div className="list-group mt-2 mr-2">
            {state.bookmarks.map((bookmark, index) => {
              if (bookmark.siteName.slice(0, 1).toUpperCase() === props.route || props.route === '/') {
                return (
                  <div className="d-flex flex-nowrap align-items-center mb-2" key={index}>
                    <div className="w-100">
                      <a
                        className="list-group-item list-group-item-action text-monospace gd-bm-bookmark-link"
                        href={bookmark.siteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{bookmark.siteName}</a>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0">
                      <Link
                        className="btn btn-outline-success mx-2"
                        to={`/edit/${bookmark.siteId}`}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                      ><i className="far fa-edit"></i></Link>
                      <Link
                        className="btn btn-outline-primary mr-2"
                        to={`/copy/${bookmark.siteId}`}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Copy"
                      ><i className="far fa-copy"></i></Link>
                      <Link
                        className="btn btn-outline-danger"
                        to={`/delete/${index}~${bookmark.siteId}`}
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                      ><i className="far fa-trash-alt"></i></Link>
                    </div>
                  </div>
                );
              } else { return null; }
            })}
          </div>
        ) : (
            <h4 className="text-warning text-center m-5">Oops! You have no bookmarks.</h4>
          )
      ) : (
          null
        )}
    </>
  );
};

// <h3 className="text-secondary text-center m-5">Loading...</h3>

export default Bookmarks;
