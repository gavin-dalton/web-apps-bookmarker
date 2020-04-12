import React from 'react';
import { Link } from "react-router-dom";
import { BookmarkContext } from '../context/BookmarkStore';

const Header = ({ home }) => {
  const [state] = React.useContext(BookmarkContext);

  // Tries to toggle the navbar
  const collapseNavBar = () => {
    let elToggler = document.getElementsByClassName('navbar-toggler');
    let elBar = document.getElementById('gd-bm-navbar');
    if (elBar.classList.contains('show')) {
      elToggler[0].click();
    }
  };

  // <span className="navbar-text text-white h4 m-0">BookMARKER</span>

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark px-2 py-2">
        <a
          className="btn btn-outline-primary mr-md-2"
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Go to OpenApps home page"
        ><i className="fa fa-home"></i></a>
        <a className="navbar-brand m-0 p-0" href={home}
        ><span className="navbar-text text-white h5 m-0">BookMARKER</span></a>

        <button
          className="navbar-toggler btn btn-outline-primary"
          type="button"
          data-toggle="collapse"
          data-target="#gd-bm-navbar"
          aria-controls="gd-bm-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-primary"></span>
        </button>

        <div className="collapse navbar-collapse" id="gd-bm-navbar">
          <div className="navbar-nav ml-auto">
            <Link
              className="btn btn-outline-primary mr-lg-2 mr-0 mt-2 mt-lg-0"
              to={`/new`}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Create new bookmark"
              onClick={collapseNavBar}
            >New bookmark</Link>
            <div className="dropdown mr-0 mt-2 mt-lg-0">
              <button
                className="btn btn-outline-primary dropdown-toggle w-100"
                id="gd-bm-options"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Options</button>
              <div
                className="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="gd-bm-options">
                <Link
                  className={state.isEmpty ? ("dropdown-item disabled") : ("dropdown-item")}
                  to={`/download`}
                  onClick={collapseNavBar}
                >Download my bookmarks</Link>
                <Link
                  className="dropdown-item"
                  to={`/upload`}
                  onClick={collapseNavBar}
                >Upload my bookmarks</Link>
                {/* <Link
                  className="dropdown-item"
                  to={`/settings`}
                  onClick={collapseNavBar}
                >Settings</Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
