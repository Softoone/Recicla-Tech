import { Switch, Route } from 'react-router-dom';

// Empresas
import Company from '../components/Company';
import CompanyList from '../components/CompanyList';
import AddCompany from '../components/AddCompany';

// Catalogo
import Catalog from '../components/Catalog';
import CatalogList from '../components/CatalogList';
import AddCatalog from '../components/AddCatalog';

// Catalogo
import Places from '../components/Places';
import PlacesList from '../components/PlacesList';
import AddPlaces from '../components/AddPlaces';

// User
import AddUser from '../components/AddUser';
// import PlacesList from './components/PlacesList';
// import AddPlaces from './components/AddPlaces';

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path={"/"} component/> */}
      <Route exact path={"/empresa"} component={CompanyList}/>
      <Route exact path={"/catalogo"} component={CatalogList}/>
      {/* <Route exact path={"/locais-coleta"} component={}/> */}
      {/* <Route exact path={"/transportadora"} component={}/> */}
      <Route exact path={"/usuario"} component={AddUser}/>
    </Switch>
  );
}

export default Routes;