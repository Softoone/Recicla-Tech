import { Link } from 'react-router-dom';
import React, { useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Nav, Navbar, Container } from 'reactstrap';

  
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

  return (
    <Navbar className="navbar navbar-expand-md bg-dark navbar-dark pl-3 pr-3">
      <Container >
        <Link className="navbar-brand" to={"/home"}>Menu</Link>
    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <Nav>
            <NavItem style={{ margin: '0 10px' }}>
              <Dropdown isOpen={dropdownOpenCompany} toggle={toggleOpenCompany}>  
                <DropdownToggle caret>
                  Empresas
                </DropdownToggle>
                <DropdownMenu>
                  <Link to={"/company"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>
                      Visualizar Empresas 
                    </DropdownItem>
                  </Link>
                    <DropdownItem divider />
                      <Link to={"/add-company"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>Adicionar</DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown> 
            </NavItem>

            <NavItem style={{ margin: '0 10px' }}>
              <Dropdown isOpen={dropdownOpenCatalogy} toggle={toggleOpenCatalogy}>
                <DropdownToggle caret>
                  Catálogo
                </DropdownToggle>
                <DropdownMenu>
                  <Link to={"/catalog"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>
                      Visualizar Catálogo 
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to={"/add-catalog"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>
                      Adicionar
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown> 
            </NavItem>

            <NavItem style={{ margin: '0 10px' }}>
              <Dropdown isOpen={dropdownOpenPlaces} toggle={toggleOpenPlaces}>
                <DropdownToggle caret>
                  Locais de Coleta
                </DropdownToggle>
                <DropdownMenu>
                  <Link to={"/places"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>
                      Visualizar Locais
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to={"/add-places"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>
                      Adicionar
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
             </Dropdown> 
            </NavItem>

            <NavItem style={{ margin: '0 10px' }}>
              <Dropdown isOpen={dropdownOpenSPCompany} toggle={toggleOpenSPCompany}>
                <DropdownToggle caret>
                    Transportadora
                </DropdownToggle>
                <DropdownMenu>
                    <Link to={"/shipping-company"} className="nav-link" data-toggle="collapse">
                      <DropdownItem>
                        Visualizar Transportadora 
                      </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <Link to={"/add-shipping-company"} className="nav-link" data-toggle="collapse">
                      <DropdownItem>
                        Adicionar
                      </DropdownItem>
                    </Link>
                </DropdownMenu>
             </Dropdown> 
            </NavItem>

            <NavItem style={{ margin: '0 10px' }}>
              <Dropdown isOpen={dropdownOpenUser} toggle={toggleUser}>
                <DropdownToggle caret>
                    Usuário
                </DropdownToggle>
                <DropdownMenu>
                  <Link to={"/user"} className="nav-link" >
                    <DropdownItem>
                      Visualizar Usuário 
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to={"/add-user"} className="nav-link" data-toggle="collapse">
                    <DropdownItem>
                      Adicionar
                    </DropdownItem>
                  </Link>
                </DropdownMenu> 
              </Dropdown> 
            </NavItem>
        </Nav>
      </Container>
    </Navbar> 
  );
}

export default Menu;