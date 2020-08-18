import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <h4 className="logo">Logo</h4>
          <ul className="nav-btns">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Shop</Link>
            </li>
          </ul>
          <button>Cart</button>
        </nav>
        

        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/topics">
            {/* <Topics /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
