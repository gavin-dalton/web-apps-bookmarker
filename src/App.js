import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components, assets & utils
import Header       from './components/Header';
import Content      from './components/Content';
import Editor       from './components/Editor';
import Delete       from './components/Delete';
import Download     from './components/Download';
import Upload       from './components/Upload';
import Settings     from './components/Settings';
import PageNotFound from './components/PageNotFound';
import './assets/Bookmarker.scss';
import { isLocalStorage } from './utilities/localstorage'

const App = () => {
  // https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1
  const root = '/apps/bookmarker';

  return (
    <>
      {isLocalStorage() ? (
        <Router basename={root}>
          <Header home={root} />
          <Switch>
            <Route path="/" exact       component={Content} />
            <Route path="/filter/:id"   component={Content} />
            <Route path="/edit/:id"     component={Editor} />
            <Route path="/copy/:id"     component={Editor} />
            <Route path="/new"          component={Editor} />
            <Route path="/delete/:id"   component={Delete} />
            <Route path="/download"     component={Download} />
            <Route path="/upload"       component={Upload} />
            <Route path="/settings"     component={Settings} />
            <Route                      component={PageNotFound} />
          </Switch>
        </Router>
      ) : (
          <div className="text-warning text-center my-5">
            <h3>Your browser doesn't support local storage. This leaves the Bookmarker application useless on your browser.</h3>
            <a className="btn btn-block mt-3" href="/">Back to OpenApps</a>
          </div>
        )
      }
    </>
  );
};

export default App;

// New router style
// <Route path="/" exact     ><Content />
// <Route path="/filter/:id" ><Content />
// <Route path="/edit/:id"   ><Editor />
// <Route path="/copy/:id"   ><Editor />
// <Route path="/new"        ><Editor />
// <Route path="/delete/:id" ><Delete />
// <Route path="/download"   ><Download />
// <Route path="/upload"     ><Upload />
// <Route path="/settings"   ><Settings />
// <Route                    ><PageNotFound />