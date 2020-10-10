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
    <BrowserRouter basename="/math_utils">
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/factorial">
            <Factorial />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
