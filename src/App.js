
import React from "react"
import Menu from './components/Menu';
import Routes from './routes/Routes';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <Menu/>
      <div className="container mt-3">
        <Routes/>
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