import React, { useState, useEffect } from 'react';
import { saveLocalStorage } from '../utilities/localstorage';

const Upload = (props) => {
  const [bookmarks, setBookmarks] = useState('');
  const [saveButtonDisabled, setSaveButtonDisabled] = useState('');
  const [saveButtonText, setSaveButtonText] = useState('Save');

  useEffect(() => {
    // console.log('Upload: bookmarks...............', bookmarks);
    if (bookmarks && !saveButtonDisabled) {
      setSaveButtonText('Save');
      setSaveButtonDisabled("No");
    }
    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarks])

  const handleTextChanges = (e) => {
    // console.log('Upload: gd-bm-bookmarks.value...', e.target.value);
    setBookmarks(e.target.value);
  };

  const handleSaveButton = (e) => {
    e.preventDefault();
    let validation = [];
    try {
      validation = JSON.parse(bookmarks);
      // console.log('Upload: JSON validation.........', validation);
      // Check if data is an Array
      if (Array.isArray(validation)) {
        // Ckeck is Array has data
        if (validation.length > 0) {
          // Check is valid bookmarks object
          if (validation[0].siteId) {
            saveLocalStorage('gd-bm-bookmarks', validation);
            setSaveButtonText('SAVED');
            setSaveButtonDisabled('');
          }
        }
      } else {
        throw new Error('Not an array');
      }
    } catch (err) {
      // Poop! Not a valid JSON string or an Array object
      // console.log('Upload: validation err..........', err);
      setSaveButtonText('ERROR');
      setSaveButtonDisabled('');
    }
  };

  const handleClearButton = (e) => {
    e.preventDefault();
    setBookmarks('');
    setSaveButtonText('Save');
    setSaveButtonDisabled('');
  }

  // console.log('Upload: props...', props);

  return (
    <div className="mx-2">
      <div className="border border-primary rounded-lg my-2 p-3">
        <h5 className="text-primary">Upload</h5>
        <p className="text-primary">Paste your saved bookmarks in the text area below</p>
        <div className="d-flex flex-row">
          <textarea
            className="w-100 gd-bm-textarea"
            id="gd-bm-bookmarks"
            value={bookmarks}
            onChange={handleTextChanges}
          ></textarea>
        </div>
        <div className="d-flex flex-row mt-3">
          <button
            type="button"
            className={saveButtonText === 'ERROR' ? ('btn btn-outline-danger') : ('btn btn-outline-primary')}
            disabled={!saveButtonDisabled}
            onClick={handleSaveButton}
          >{saveButtonText}</button>
          <button
            type="button"
            className="btn btn-outline-primary ml-2"
            onClick={handleClearButton}
          >Clear</button>
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

export default Upload;
