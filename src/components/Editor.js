import React, { useState, useEffect } from 'react';
// import { BookmarkContext } from '../context/BookmarkStore';

const Editor = (props) => {
  const [mode, setMode] = useState('');
  const [site, setSite] = useState({ siteId: '', siteName: '', siteURL: '' });
  // const [state, dispatch] = useContext(BookmarkContext);

  useEffect(() => {
    const path = props.match.path;
    let id = '';

    if (path === '/edit/:id') {
      id = props.match.params.id;
      console.log('Editor: id...', id);
      setMode('EDIT');
    } else {
      setMode('NEW');
    }
    console.log('Editor: mode...', mode);

    // Effect clean-up function
    // console.log('Editor: Effect cleanup...');
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Editor: siteId............', site.siteId);
    console.log('Editor: siteURL...........', site.siteURL);
    console.log('Editor: siteName..........', site.siteName);
    // console.log('Editor: state.bookmarks...', state.bookmarks);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setSite({ siteId: '', siteName: '', siteURL: '' });
    props.history.goBack();
  };

  const handleURL = (e) => {
    if (!e.target.value) {
      setSite({ ...site, siteURL: 'https://www.' });
    }
  };

  console.log('Editor: props...', props);

  return (
    <div className="container">
      <div className="border border-primary rounded-lg my-2 p-3">
        <form autoComplete="off" onSubmit={handleSave}>
          <div className="form-group mb-0">
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Site Name e.g. Google Home"
              name="siteName"
              value={site.siteName}
              onChange={e => setSite({ ...site, siteName: e.target.value })}
            />
            <input
              className="form-control mb-3"
              type="url"
              placeholder="Site URL e.g. https://www.site.com"
              pattern="(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?"
              name="siteURL"
              value={site.siteURL}
              onChange={e => setSite({ ...site, siteURL: e.target.value })}
              onFocus={handleURL}
            />
            {mode === 'EDIT' ? (
              <button
                className="btn btn-outline-success mr-2"
                type="submit"
              >Update</button>
            ) : (null)}
            <button
              className="btn btn-outline-primary mr-2"
              type="submit"
            >Save as New</button>
            <button
              className="btn btn-outline-warning"
              onClick={handleCancel}
            >Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editor;
