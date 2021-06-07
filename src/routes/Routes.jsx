import { Switch, Route } from 'react-router-dom';

// Empresas
import Company from '../components/Company';
import CompanyList from '../components/CompanyList';
import AddCompany from '../components/AddCompany';

// Catalogo
import Catalog from '../components/Catalog';
import CatalogList from '../components/CatalogList';
import AddCatalog from '../components/AddCatalog';

// Locais de coleta
import Places from '../components/Places';
import PlacesList from '../components/PlacesList';
import AddPlaces from '../components/AddPlaces';

// Transportadora
import Shipping_CompanyList from "../components/Shipping_CompanyList";
import Shipping_Company from "../components/Shipping_Company";
import AddShipping_Company from "../components/AddShipping_Company";

// User
import AddUser from '../components/AddUser';
import UserList from '../components/UserList';
import User from '../components/EditUser'

const Routes = () => {
  return (
    <Switch>
      {/* empresa */}
      <Route exact path={"/empresa"} component={CompanyList}/>
      <Route exact path={"/add-empresa"} component={AddCompany}/>
      <Route exact path={"/empresas/:id"} component={Company}/>

      {/* Catalogo */}
      <Route exact path={"/catalogo"} component={CatalogList}/>
      <Route exact path={"/add-catalogo"} component={AddCatalog}/>
      <Route exact path={"/catalogo/:id"} component={Catalog}/>

      {/* Locais de coleta */}
      <Route exact path={"/locais-coleta"} component={PlacesList}/>
      <Route exact path={"/add-locais-coleta"} component={AddPlaces}/>
      <Route exact path={"/locais-coleta/:id"} component={Places}/>

      {/* Transportadora */}
      <Route exact path={"/transportadora"} component={Shipping_CompanyList}/>
      <Route exact path={"/add-transportadora"} component={AddShipping_Company}/>
      <Route exact path={"/transportadora/:id"} component={Shipping_Company}/>

      {/* Usuario */}
      <Route exact path={"/usuario"} component={UserList}/>
      <Route exact path={"/add-usuario"} component={AddUser}/>
      <Route exact path={"/usuario/:id"} component={User} />
      
    </Switch>
  );
}

export default Routes;