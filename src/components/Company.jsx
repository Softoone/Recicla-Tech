import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import  * as api from '../services/CompanyMockApi';
 
const Company = ({ match }) => {
  const initialCompanyState = { 
    name: "",
    cnpj:"",
    address: "",
    responsible: "",
    phone: "",
    collection_place: false
  };

  const [message, setMessage] = useState("");
  const [currentCompany, setCurrentCompany] = useState(initialCompanyState);
  const [key, setKey] = useState();
  

  useEffect(()=>{
    api.getOne(match.params.id).then(response => {
      setCurrentCompany(response.data);
    })
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCompany({ ...currentCompany, [name]: value });
  };

  const updateCompany = () => {
    const data = { 
      name : currentCompany.name,
      cnpj : currentCompany.cnpj,
      address : currentCompany.address,
      responsible : currentCompany.responsible,
      phone : currentCompany.phone,
      collection_place : currentCompany.collection_place ? true : false,
    }

    api.update(currentCompany.id, data);;
  };

  const deleteCompany = () => {
    if (window.confirm('Deseja excluir?')){
      api.remove(currentCompany.id);
    }
  };

  return (
    <div>
      {currentCompany ? (
        <div className="edit-form">
          <h4>Company</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nome Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={currentCompany.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpj"
                  required
                  value={currentCompany.cnpj}
                  onChange={handleInputChange}
                  name="cnpj"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Endereco</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  value={currentCompany.address}
                  onChange={handleInputChange}
                  name="address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="responsible">Responsavel</label>
                <input
                  type="text"
                  className="form-control"
                  id="responsible"
                  required
                  value={currentCompany.responsible}
                  onChange={handleInputChange}
                  name="responsible"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={currentCompany.phone}
                  onChange={handleInputChange}
                  name="phone"
                />
              </div>
            </form>
          
          <button className="btn btn-danger mr-2" onClick={deleteCompany}>
            Delete
          </button>
          
          <Link to="/company">
            <button
              type="submit"
              className="btn btn-success"
              onClick={updateCompany}
            >
              Update
            </button>
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Company;
