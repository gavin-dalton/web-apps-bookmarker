import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from './components/Header';
import Content from './components/Content';
import './assets/Bookmarker.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Content} />
      <Route path="/:id" component={Content} />
    </Router>
  );
};

export default App;
