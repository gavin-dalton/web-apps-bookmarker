import React, { useState, useEffect, useContext } from 'react';
import uuidv1 from 'uuid/v1';
import collection from 'lodash/collection';
import { BookmarkContext } from '../context/BookmarkStore';
import { saveLocalStorage } from '../utilities/localstorage';

const bookmarkInit = { order: 0, siteName: '', siteURL: '' };

const Editor = (props) => {
  const [mode, setMode] = useState('NEW');
  const [bookmark, setBookmark] = useState(bookmarkInit);
  const [title, setTitle] = useState('Loading...');
  const [state, dispatch] = useContext(BookmarkContext);

  // Set editor mode effect
  useEffect(() => {
    let targetBookmark = [];
    // console.log(props.match.path.indexOf('edit/:id'));

    if (props.match.path.indexOf('edit/:id') > -1) {
      targetBookmark = collection.filter(state.bookmarks, (o) => { return o.siteId === props.match.params.id });
      setBookmark({
        ...bookmark,
        siteName: targetBookmark[0].siteName,
        siteURL: targetBookmark[0].siteURL
      });
      setMode('EDIT');
      setTitle('Edit bookmark');
    }

    if (props.match.path.indexOf('copy/:id') > -1) {
      targetBookmark = collection.filter(state.bookmarks, (o) => { return o.siteId === props.match.params.id });
      setBookmark({
        ...bookmark,
        siteName: targetBookmark[0].siteName,
        siteURL: targetBookmark[0].siteURL
      });
      setMode('COPY');
      setTitle('Copy bookmark');
    }

    if (props.match.path.indexOf('new') > -1) {
      setMode('NEW');
      setTitle('New bookmark');
      setBookmark(bookmarkInit);
    }

    // Effect clean-up function
    // console.log('Editor: Effect cleanup...');
    return () => true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.path])

  const handleSave = (e) => {
    e.preventDefault();
    let bookmarks = [];
    switch (mode) {
      case 'EDIT':
        state.bookmarks.forEach((v, i, a) => {
          if (props.match.params.id === v.siteId) {
            bookmarks.push({
              ...v,
              siteName: bookmark.siteName,
              siteURL: bookmark.siteURL
            })
          } else { bookmarks.push({ ...v }) }
        })
        // console.log('Editor: bookmarks.edit...', bookmarks);
        saveLocalStorage('gd-bm-bookmarks', bookmarks);
        dispatch({ type: 'BM_SAVE', payload: bookmarks });
        break;
      case 'COPY':
        bookmarks = [...state.bookmarks, { siteId: uuidv1(), ...bookmark }];
        saveLocalStorage('gd-bm-bookmarks', bookmarks);
        dispatch({ type: 'BM_SAVE', payload: bookmarks });
        break;
      case 'NEW':
        bookmarks = [...state.bookmarks, { siteId: uuidv1(), ...bookmark }];
        saveLocalStorage('gd-bm-bookmarks', bookmarks);
        dispatch({ type: 'BM_SAVE', payload: bookmarks });
        break;
      default:
        // Nothing to do
        break;
    };

    // console.log('Editor: bookmark..........', bookmark);
    // console.log('Editor: bookmarks.........', bookmarks);
    // console.log('Editor: state.bookmarks...', state.bookmarks);

    props.history.goBack();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setBookmark(bookmarkInit);
    props.history.goBack();
  };

  const handleURL = (e) => {
    if (!e.target.value) {
      setBookmark({ ...bookmark, siteURL: 'https://www.' });
    }
  };

  // console.log('Editor: props...', props);

  return (
    <div className="container">
      <div className="border border-primary rounded-lg my-2 p-3">
        <h5 className="text-secondary mb-3">{title}</h5>
        <form autoComplete="off" onSubmit={handleSave}>
          <div className="form-group input-group-lg mb-0">
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Site Name e.g. Google Home"
              name="siteName"
              value={bookmark.siteName}
              onChange={e => setBookmark({ ...bookmark, siteName: e.target.value })}
              required={true}
            />
            <input
              className="form-control mb-3"
              type="url"
              placeholder="Site URL e.g. https://www.site.com"
              // pattern="(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?"
              name="siteURL"
              value={bookmark.siteURL}
              onChange={e => setBookmark({ ...bookmark, siteURL: e.target.value })}
              onFocus={handleURL}
              required={true}
            />
            <button
              className="btn btn-outline-success mr-2"
              type="submit"
            >Save</button>
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
