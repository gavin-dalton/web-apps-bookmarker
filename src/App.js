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
  // https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1
  const root = '/apps/web-apps-bookmarker';
  
  return (
    <>
      {isLocalStorage() ? (
        <Router basename={root}>
          <Header />
          <Switch>
            <Route path="/" exact     component={Content} />
            <Route path="/filter/:id" component={Content} />
            <Route path="/edit/:id"   component={Editor} />
            <Route path="/copy/:id"   component={Editor} />
            <Route path="/delete/:id" component={Delete} />
            <Route path="/new"        component={Editor} />
            <Route path="/download"   component={Download} />
            <Route path="/settings"   component={Settings} />
            <Route                    component={PageNotFound} />
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

