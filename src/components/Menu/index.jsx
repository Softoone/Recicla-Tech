// import { Link } from 'react-router-dom';

import './styles.css';

const Menu = () => {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" href="#">Menu</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Catálogo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Destino</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Transportadora</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Locais de coleta</a>
          </li>
        </ul>
      </div>
  </nav>
  );
}

export default Menu;