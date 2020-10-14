import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Factorial from './pages/Factorial';
import FibonacciPage from './pages/Fibonacci';
import GCDPage from './pages/GCD';
import PageNotFound from './pages/PageNotFound';
import * as serviceWorker from './serviceWorker';




// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/factorial" component={Factorial} />
      <Route exact path="/gcd" component={GCDPage} />
      <Route exact path="/fibonacci" component={FibonacciPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}


ReactDOM.render(
  <BrowserRouter basename="/math_utils">
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
