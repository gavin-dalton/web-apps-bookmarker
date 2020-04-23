import React, { useState, useEffect } from 'react';

/**
 * Helper function to reformat the bookmark list
 * @param {string} popMe String to pop
 */
const stringPop = (popMe) => {
  let popped = popMe;
  popped = popped.replace('[', '[\n');
  popped = popped.replace(']', '\n]');
  popped = popped.replace(/},{/g, '},\n{');
  return popped;
};

const Download = (props) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isDisabled, setIsDisabled] = useState('');
  const [copyButton, setCopyButton] = useState('Copy');

  useEffect(() => {
    setBookmarks(stringPop(localStorage.getItem('gd-bm-bookmarks')));
    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (bookmarks.length > 1 && !isDisabled) {
        setIsDisabled('No');
        // console.log('Download: isDisabled...', isDisabled);
      }
    }, 1000);
    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarks]);

  const handleCopy = (e) => {
    e.preventDefault();
    /* Get the text field */
    let copyText = document.getElementById('gd-bm-bookmarks');
    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    document.execCommand('copy');
    setIsDisabled('');
    setCopyButton('COPIED');
  };

  // console.log('Download: bookmarks...', bookmarks);

  return (
    <div className="mx-2">
      <div className="border border-primary rounded-lg my-2 p-3">
        <h5 className="text-primary">Download</h5>
        <p className="text-primary">Copy content to a text file</p>
        <div className="d-flex flex-row">
          <textarea
            className="w-100 gd-bm-textarea"
            defaultValue={bookmarks}
            id="gd-bm-bookmarks"
          ></textarea>
        </div>
        <div className="d-flex flex-row mt-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            disabled={!isDisabled}
            onClick={handleCopy}
          >{copyButton}</button>
          <button
            type="button"
            className="btn btn-outline-warning ml-2"
            onClick={() => { props.history.goBack() }}
          >Back</button>
        </div>
      </div>
    </div>
  );
};

export default Download;
