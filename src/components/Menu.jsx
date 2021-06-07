import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark pl-3 pr-3">
      <div className="container">
        <a className="navbar-brand" href="#">Menu</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link to={"/empresa"} className="nav-link" data-toggle="collapse">Empresa</Link>
            </li>
            <li className="nav-item">
              <Link to={"/catalogo"} className="nav-link" data-toggle="collapse" >Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link to={"/locais-coleta"} className="nav-link" data-toggle="collapse" >Locais de coleta</Link>
            </li>
            <li className="nav-item">
              <Link to={"/transportadora"} className="nav-link" data-toggle="collapse" >Transportadora</Link>
            </li>
            <li className="nav-item">
              <Link to={"/usuario"} className="nav-link" data-toggle="collapse" >Usuario</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;