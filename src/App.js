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
import {useSelector} from 'react-redux';
import Home from './components/Home';
import Shop from './components/Shop';

export default function App() {
  const counter = useSelector(state => state.counter)

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
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          <button>Cart {counter}</button>
        </nav>
        

        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
