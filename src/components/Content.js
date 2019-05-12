import React from 'react';

// Components
import Alphabet from './Alphabet';
import Bookmarks from './Bookmarks';

const Content = (props) => {
  // console.log(props);
  const route = props.match.params.id ? props.match.params.id : '/';

  return (
    <div>
      <div className="d-flex flex-nowrap">
        <div className="gd-bm-flex-alpha">
          <Alphabet />
        </div>
        <div className="w-100">
          <Bookmarks route={route} />
        </div>
      </div>
    </div>
  );
};

export default Content;
