import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components, assets & utils
import Header from './components/Header';
import Content from './components/Content';
import Editor from './components/Editor';
import Delete from './components/Delete';
import Download from './components/Download';
import Settings from './components/Settings';
import PageNotFound from './components/PageNotFound';
import './assets/Bookmarker.scss';
import { isLocalStorage } from './utilities/localstorage'

const App = () => {
  const root = window.location.pathname;
  // console.log('App: root...', root);
  return (
    <>
      {isLocalStorage() ? (
        <Router>
          <Header root={root}/>
          <Switch>
            <Route path={root} exact component={Content} />
            <Route path={`${root}filter/:id`} component={Content} />
            <Route path={`${root}edit/:id`} component={Editor} />
            <Route path={`${root}copy/:id`} component={Editor} />
            <Route path={`${root}delete/:id`} component={Delete} />
            <Route path={`${root}new`} component={Editor} />
            <Route path={`${root}download`} component={Download} />
            <Route path={`${root}settings`} component={Settings} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      ) : (
          <div className="text-warning text-center my-5">
            <h3>Your browser doesn't support local storage. This leaves the Bookmarker application useless on your browser.</h3>
            <a className="btn btn-block mt-3" href='/'>Back to OpenApps</a>
          </div>
        )
      }
    </>
  );
};

export default App;

