import React, { useState, useEffect } from 'react';

const Upload = (props) => {
  const [bookmarks, setBookmarks] = useState('');

  // console.log('Upload: props...', props);

  return (
    <div className="mx-2">
      <div className="border border-primary rounded-lg my-2 p-3">
        <h4>Upload</h4>
        <p>Paste your saved bookmarks in the text area below</p>
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

export default Upload;
