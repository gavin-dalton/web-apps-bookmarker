import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 py-2">
        <a
          className="btn mr-md-2"
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Go to OpenApps home page"
        ><i className="fa fa-home"></i></a>
        <span
          className="navbar-text h4 m-0"
        >Bookmarker</span>

        <button
          className="navbar-toggler btn"
          type="button"
          data-toggle="collapse"
          data-target="#gd-bm-navbar"
          aria-controls="gd-bm-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="gd-bm-navbar">
          <div className="navbar-nav ml-auto">
            <button
              className="btn mr-lg-2 mr-0 mt-2 mt-lg-0"
              type="button"
              onClick={() => { }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Create new bookmark"
            >New bookmark</button>
            <div className="dropdown mr-lg-2 mr-0 mt-2 mt-lg-0">
              <button
                className="btn dropdown-toggle"
                id="gd-bm-options"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Options</button>
              <div
                className="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="gd-bm-options">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => { }}
                >Download my bookmarks</button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => { }}
                >Change my header</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
