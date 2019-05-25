import React, { useState, useEffect, useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkStore';

const Editor = (props) => {
  const [siteName, setSiteName] = useState('');
  const [siteURL, setSiteURL] = useState('');
  const [state, dispatch] = useContext(BookmarkContext);

  useEffect(() => {

    // Effect clean-up function
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleURL = (e) => {
    if (!e.target.value) {
      setSiteURL('https://www.');
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSiteName('');
    setSiteURL('');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setSiteName('');
    setSiteURL('');
    props.handleEditorState();
  };

  return (
    <div className="container">
      <div className={props.editorState}>
        <div className="border border-warning rounded-lg my-2 p-3">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group mb-0">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Site Name e.g. Google Home"
                name="siteName"
                value={siteName}
                onChange={e => setSiteName(e.target.value)}
              />
              <input
                className="form-control mb-3"
                type="url"
                placeholder="Site URL e.g. https://www.site.com"
                pattern="(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?"
                name="siteURL"
                value={siteURL}
                onChange={e => setSiteURL(e.target.value)}
                onFocus={handleURL}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
              >Save</button>
              <button
                className="btn btn-outline-secondary ml-2"
                onClick={handleClear}
              >Clear</button>
              <button
                className="btn btn-outline-secondary ml-2"
                onClick={handleCancel}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editor;
