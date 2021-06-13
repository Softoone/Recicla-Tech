import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import  * as api  from '../services/CompanyMockApi';

const CompaniesList = () => {
  const [searchName, setSearchName] = useState("");
  const [companies, setCompanies] = useState([]);


  const onChangeSearchName = event => {
    const searchName = event.target.value;
    setSearchName(searchName);
  };

  const deleteCompany = (id) => {
    if (window.confirm('Deseja excluir?')){
      api.remove(id);
    }
  }

  const removeAllCompanies = () => {
    if (window.confirm('Deseja excluir?')){
      api.removeAll();
      api.getAll(response => {
        setCompanies(response.data)
      })
    }
  };


  const findByName = () => {
    api.findCompaniesByName((searchName)).then(response => {
      setCompanies(response.data)
    })
  };

  useEffect(()=>{
    api.getAll().then(response => {
      setCompanies(response.data)
    });
  },[]);

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
              <th scope="col">CNPJ</th>
              <th scope="col">Endereco</th>
              <th scope="col">Responsavel</th>
              <th scope="col">Telefone</th>
              <td>Editar</td>
              <td>Remover</td>
            </tr>
          </thead>
          <tbody>
          { 
            companies &&
            companies.map((company, index) => (
              <tr key={index}>
                <th scope="row">{company.id}</th>
                <th scope="row">{company.name}</th>
                <td scope="row">{company.cnpj}</td>
                <td scope="row">{company.address}</td>
                <td scope="row">{company.responsible}</td>
                <td scope="row">{company.phone}</td>
                <td scope="row"> 
                  <Link 
                    className="btn btn-warning"
                    to={`/company/${company.id}`}
                  >Edit</Link>
                </td>
                <td scope="row"> 
                  <Link 
                    className="btn btn-danger"
                    onClick={() => deleteCompany(company.id)}
                  >Remove</Link>
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
