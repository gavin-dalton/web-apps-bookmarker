import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

  // Tries to toggle the navbar
  const collapseNavBar = () => {
    let elToggler = document.getElementsByClassName('navbar-toggler');
    let elBar = document.getElementById('gd-bm-navbar');
    if (elBar.classList.contains('show')) {
      elToggler[0].click();
    }
  };

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
        <span
          className="navbar-text text-white h4 m-0"
        >BookMARKER</span>

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
            <div className="dropdown mr-lg-2 mr-0 mt-2 mt-lg-0">
              <button
                className="btn btn-outline-primary dropdown-toggle"
                id="gd-bm-options"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Options</button>
              <div
                className="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="gd-bm-options">
                <Link
                  className="dropdown-item"
                  to={`/download`}
                  onClick={collapseNavBar}
                >Download my bookmarks</Link>
                <Link
                  className="dropdown-item"
                  to={`/upload`}
                  onClick={collapseNavBar}
                >Upload my bookmarks</Link>
                <Link
                  className="dropdown-item"
                  to={`/settings`}
                  onClick={collapseNavBar}
                >Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
