import Menu from './components/Menu';
import Company from './components/Company';
import CompanyList from './components/CompanyList';
import AddCompany from './components/AddCompany';

const App = () => {
  return (
    <>
      <Menu/>
      <div className="container mt-3">
        {/* <Switch>
          <Route exact path="/companies" component={CompanyList} />
          <Route exact path="/add-company" component={AddCompany} />
          <Route path="/company/:id" component={Company} />
        </Switch> */}
      </div>
    </>
  );
}

export default App;
