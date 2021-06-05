import { useState } from "react";
import { Link } from "react-router-dom";
// import Pagination from "@material-ui/lab/Pagination";

import CompanyDataService from "../services/CompanyDataService";


const CompaniesList = () => {
  const [searchName, setSearchName] = useState("");
  const [companies, setCompanies] = useState(CompanyDataService.getAll());


  const onChangeSearchName = event => {
    const searchName = event.target.value;
    setSearchName(searchName);
  };



  const deleteCompany = title => {
    if (window.confirm('Deseja excluir?')){
      CompanyDataService.remove(title);
    }
  }

  const removeAllCompanies = () => {
    if (window.confirm('Deseja excluir?')){
      CompanyDataService.removeAll();
      setCompanies(CompanyDataService.getAll())
    }
  };


  const findByName = () => {
    setCompanies(CompanyDataService.getByName(searchName))
  };

  return (
    <div className="list row">
      <div className="col-md-10">
        
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchName}
            onChange={onChangeSearchName}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <h4>Company List</h4>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">cnpj</th>
              <th scope="col">address</th>
              <th scope="col">responsible</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody>
          { 
            companies &&
            companies.map((company, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{company.cnpj}</td>
                <td>{company.address}</td>
                <td> <Link to={`/companies/${company.name}`}
                  className="badge badge-warning">Edit</Link>
                </td>
                <td> <Link onClick={() => deleteCompany(company.name)}
                  className="badge badge-danger">Remove</Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllCompanies}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default CompaniesList;
