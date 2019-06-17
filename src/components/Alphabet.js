import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { BookmarkContext } from '../context/BookmarkStore';
import array from 'lodash/array';
import collection from 'lodash/collection';

const Alphabet = (props) => {
  const [index, setIndex] = useState(['**']);
  const [state] = useContext(BookmarkContext);

  useEffect(() => {
    let bookmarks = [];
    if (state.bookmarks) {
      bookmarks = state.bookmarks.map((v, i) => { return v.siteName.slice(0, 1).toUpperCase(); });
      bookmarks = collection.orderBy(array.uniq(bookmarks));
    }
    setIndex(['**', ...bookmarks]);
    // Effect clean-up function
    return () => true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.route]);

  return (
    <div className="gd-bm-alpha-container">
      {index && index.map((v, i) => {
        return (
          <NavLink
            key={i}
            to={v === '**' ? '/' : `/filter/${v}`}
            className="btn btn-outline-primary mt-2 mx-2 btn-block"
            activeClassName="bg-secondary"
          >{v}</NavLink>
        );
      })}
    </div>
  );
};

export default Alphabet;
