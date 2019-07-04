import React, { useState, useEffect } from 'react';

const Download = (props) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(localStorage.getItem('gd-bm-bookmarks'));
    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('Download: bokmarks...', bookmarks);

  return (
    <div className="mx-2">
      <div className="border border-primary rounded-lg my-2 p-3">
        <h4>Download</h4>
        <p>Copy content to a text file</p>
        <div className="d-flex flex-row">
          <textarea
            className="w-100 gd-bm-textarea"
            defaultValue={bookmarks}
          ></textarea>
        </div>
        <div className="d-flex flex-row mt-3">
          <button
            className="btn btn-outline-warning"
            onClick={() => { props.history.goBack() }}
          >Back</button>
        </div>
      </div>
    </div>
  );
};

export default Download;
