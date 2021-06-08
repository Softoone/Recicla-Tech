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
      <Route exact path={"/company"} component={CompanyList}/>
      <Route exact path={"/add-company"} component={AddCompany}/>
      <Route exact path={"/company/:id"} component={Company}/>

      {/* Catalogo */}
      <Route exact path={"/catalog"} component={CatalogList}/>
      <Route exact path={"/add-catalog"} component={AddCatalog}/>
      <Route exact path={"/catalog/:id"} component={Catalog}/>

      {/* Locais de coleta */}
      <Route exact path={"/places"} component={PlacesList}/>
      <Route exact path={"/add-places"} component={AddPlaces}/>
      <Route exact path={"/places/:id"} component={Places}/>

      {/* Transportadora */}
      <Route exact path={"/shipping-company"} component={Shipping_CompanyList}/>
      <Route exact path={"/add-shipping-company"} component={AddShipping_Company}/>
      <Route exact path={"/shipping-company/:id"} component={Shipping_Company}/>

      {/* Usuario */}
      <Route exact path={"/user"} component={UserList}/>
      <Route exact path={"/add-user"} component={AddUser}/>
      <Route exact path={"/user/:id"} component={User} />
      
    </Switch>
  );
}

export default Routes;