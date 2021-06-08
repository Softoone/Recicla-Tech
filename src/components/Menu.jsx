import { Link } from 'react-router-dom';
import React, { useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

  
const Menu = () => {
  const [dropdownOpenCompany, setDropdownOpenCompany] = useState(false);
  const [dropdownOpenCatalogy, setDropdownOpenCatalogy] = useState(false);
  const [dropdownOpenPlaces, setDropdownOpenPlaces] = useState(false);
  const [dropdownOpenSPCompany, setDropdownOpenSPCompany] = useState(false);
  const [dropdownOpenUser, setDropdownOpenUser] = useState(false);

  const toggleOpenCompany = () => setDropdownOpenCompany(prevState => !prevState);
  const toggleOpenCatalogy = () => setDropdownOpenCatalogy(prevState => !prevState);
  const toggleOpenPlaces = () => setDropdownOpenPlaces(prevState => !prevState);
  const toggleOpenSPCompany = () => setDropdownOpenSPCompany(prevState => !prevState);
  const toggleUser = () => setDropdownOpenUser(prevState => !prevState);
  



  /* const click = () =>{
    if(){

    }
  } */
  

  return (
        /*<Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
      </Dropdown>
     */
    <nav className="navbar navbar-expand-md bg-dark navbar-dark pl-3 pr-3">
      <div className="container">
        <a className="navbar-brand" href="#">Menu</a>
    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
          <ul className="navbar-nav">
<<<<<<< HEAD
          
          <Dropdown isOpen={dropdownOpenCompany} toggle={toggleOpenCompany}>  
            <DropdownToggle caret>
              Empresas
            </DropdownToggle>
            <DropdownMenu>
                <Link to={"/empresa"} className="nav-link" data-toggle="collapse">
                <DropdownItem>
                  Visualizar Empresas 
                </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link to={"/add-empresa"} className="nav-link" data-toggle="collapse">
                <DropdownItem>Adicionar</DropdownItem>
                </Link>
            </DropdownMenu>
          </Dropdown> 

          <Dropdown isOpen={dropdownOpenCatalogy} toggle={toggleOpenCatalogy}>
            <DropdownToggle caret>
                Catálogo
            </DropdownToggle>
            <DropdownMenu>
                <Link to={"/catalogo"} className="nav-link" data-toggle="collapse">
                <DropdownItem>
                  Visualizar Catálogo 
                </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link to={"/add-catalogo"} className="nav-link" data-toggle="collapse">
                <DropdownItem>Adicionar</DropdownItem>
                </Link>
            </DropdownMenu>
          </Dropdown> 

        <Dropdown isOpen={dropdownOpenPlaces} toggle={toggleOpenPlaces}>
          <DropdownToggle caret>
                Locais de Coleta
          </DropdownToggle>
          <DropdownMenu>
              <Link to={"/locais-coleta"} className="nav-link" data-toggle="collapse">
              <DropdownItem>
                Visualizar Locais
              </DropdownItem>
              </Link>
              <DropdownItem divider />
              <Link to={"/add-locais-coleta"} className="nav-link" data-toggle="collapse">
              <DropdownItem>Adicionar</DropdownItem>
              </Link>
          </DropdownMenu>
          </Dropdown> 

          <Dropdown isOpen={dropdownOpenSPCompany} toggle={toggleOpenSPCompany}>
            <DropdownToggle caret>
                Transportadora
            </DropdownToggle>
            <DropdownMenu>
                <Link to={"/transportadora"} className="nav-link" data-toggle="collapse">
                <DropdownItem>
                  Visualizar Transportadora 
                </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link to={"/add-transportadora"} className="nav-link" data-toggle="collapse">
                <DropdownItem>Adicionar</DropdownItem>
                </Link>
            </DropdownMenu>
          </Dropdown> 

          <Dropdown isOpen={dropdownOpenUser} toggle={toggleUser}>
            <DropdownToggle caret>
                Usuário
            </DropdownToggle>
            <DropdownMenu>
                <Link to={"/usuario"} className="nav-link" >
                <DropdownItem>
                  Visualizar Usuário 
                </DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link to={"/add-usuario"} className="nav-link" data-toggle="collapse">
                <DropdownItem>Adicionar</DropdownItem>
                </Link>
            </DropdownMenu> 
          </Dropdown> 
=======
            <li className="nav-item dropdown">
              <Link to={"/company"} className="nav-link" data-toggle="collapse">Empresa</Link>
            </li>
            <li className="nav-item">
              <Link to={"/catalog"} className="nav-link" data-toggle="collapse" >Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link to={"/places"} className="nav-link" data-toggle="collapse" >Locais de coleta</Link>
            </li>
            <li className="nav-item">
              <Link to={"/shipping-company"} className="nav-link" data-toggle="collapse" >Transportadora</Link>
            </li>
            <li className="nav-item">
              <Link to={"/user"} className="nav-link" data-toggle="collapse" >Usuario</Link>
            </li>
>>>>>>> 0a5c1715f16ab84c58a73a1c41b2f7ae8cd1a34d
          </ul>
        </div>
      </div>
    </nav> 

  );
}

export default Menu;