<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from './components/Menu';
import AddUser from './components/AddUser'

const App = () => {
  return (
    <>
      <Menu/>
      App component
    </>
=======
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddCatalog";
import Tutorial from "./components/Catalog";
import TutorialsList from "./components/CatalogList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Exemplo Bootstrap
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
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
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>
>>>>>>> feature/catalogo
  );
}

export default App;
