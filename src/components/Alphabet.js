import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { BookmarkContext } from '../context/BookmarkStore';
import array from 'lodash/array';
import collection from 'lodash/collection';

const Alphabet = (props) => {
  const [active, setActive] = useState('**');
  const [index, setIndex] = useState([active]);
  const [state] = useContext(BookmarkContext);
  // console.log('Alphabet: props.route...', props.route);

  useEffect(() => {
    if (props.route) {
      if (props.route === '/') {
        setActive('**');
      } else {
        setActive(props.route);
      }
    }
    // Effect clean-up function
    return () => true;
  }, [props.route])

  useEffect(() => {
    // console.log('Alphabet: state.hasChanged...', state.hasChanged);
    let x = state.bookmarks
      ? state.bookmarks.map((v, i) => { return v.siteName.slice(0, 1).toUpperCase(); })
      : [];
    x = collection.orderBy(array.uniq(x));
    setIndex(['**', ...x]);
    // Effect clean-up function
    return () => true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.hasChanged]);

  // console.log('Alphabet: index...', index);

  return (
    <div>
      {index && index.map((v, i) => {
        return (
          <Link
            key={i}
            to={v === '**' ? '/' : `/${v}`}
            className={'btn mt-2 mx-2' + (v === active ? ' btn-primary' : '')}
          >{v}</Link>
        );
      })}
    </div>
  );
};

export default Alphabet;
