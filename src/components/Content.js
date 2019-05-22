import React from 'react';
import BookmarkStore from '../context/BookmarkStore';

// Components
import Alphabet from './Alphabet';
import Bookmarks from './Bookmarks';

const Content = (props) => {
  // console.log('Content: props...', props);
  const route = props.match.params.id ? props.match.params.id : '/';

  return (
    <BookmarkStore>
      <div className="d-flex flex-nowrap">
        <div className="gd-bm-flex-alpha">
          <Alphabet route={route} />
        </div>
        <div className="w-100">
          <Bookmarks route={route} />
        </div>
      </div>
    </BookmarkStore>
  );
};

export default Content;
