import React from 'react';
import DataHook from '../hooks/DataHook';

const Bookmarks = (props) => {
  // const bookmarks = ['Google', 'First National Bank', 'Standard Bank', 'Apple Trees', 'Banana Tree'];
  // console.log(`Bookmarks to show: ${props.route}`);
  const {
    isLoading,
    bookmarks,
    handleAdd,
    handleDelete
  } = DataHook(props.route);

  console.log('is loading...', isLoading);

  return (
    <div className="list-group mt-2 mr-2">
      {!isLoading && bookmarks.map((bookmark, index) => {
        return (
          <div className="d-flex flex-nowrap align-items-center mb-2" key={index}>
            <div className="w-100">
              <a
                className="list-group-item list-group-item-action"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >{bookmark.siteName}</a>
            </div>
            <div className="flex-grow-0 flex-shrink-0">
              <i
                className="far fa-edit mx-2 gd-bm-icon"
                data-index={index}
                onClick={handleAdd}
              ></i>
              <i
                className="far fa-trash-alt gd-bm-icon"
                data-index={index}
                onClick={handleDelete}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bookmarks;
