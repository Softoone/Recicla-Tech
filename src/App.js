import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPlaces from "./components/AddPlaces";
import Places from "./components/Places";
import PlacesList from "./components/PlacesList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/places" className="navbar-brand">
          Exemplo Bootstrap
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/places"} className="nav-link">
            Catalog
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Catalog
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/places"]} component={PlacesList} />
          <Route exact path="/add" component={AddPlaces} />
          <Route path="/places/:id" component={Places} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
