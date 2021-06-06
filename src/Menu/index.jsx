import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import Shipping_CompanyList from "../Shipping_CompanyList";
import Shipping_Company from "../Shipping_Company";
import AddShipping_Company from "../AddShipping_Company";


function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/transportadora" className="navbar-brand">
          Exemplo Bootstrap
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/transportadora"} className="nav-link">
              Transportadora
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
                Adicionar
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/transportadora"]} component={Shipping_CompanyList} />
          <Route exact path="/add" component={AddShipping_Company} />
          <Route path="/transportadora/:id" component={Shipping_Company} />
        </Switch>
      </div>
    </div>
  );
}
export default Menu;