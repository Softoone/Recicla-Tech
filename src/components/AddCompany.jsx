import { useState } from "react";
import * as CompanyDataService from "../services/CompanyDataService";

const AddCompany = () => {
  const initialCompanyState = {
    name: "",
    cnpj:"",
    address: "",
    responsible: "",
    phone: "",
    collection_place: false
  };

  const [company, setCompany] = useState(initialCompanyState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCompany({ ...company, [name]: value });
  };

  const saveCompany = () => {
    const data = { 
      name : company.name,
      cnpj : company.cnpj,
      address : company.address,
      responsible : company.responsible,
      phone : company.phone,
      collection_place : company.collection_place ? true : false,
    }

    CompanyDataService.create(data);
    setSubmitted(true);
  };

  const newCompany = () => {
    setCompany(initialCompanyState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCompany}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Nome Empresa</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={company.name}
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
              value={company.cnpj}
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
              value={company.address}
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
              value={company.responsible}
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
              value={company.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="collection_place">Eh ponto de colata ?</label>
            <input
              type="radio"
              className="form-control"
              id="collection_place"
              required
              onChange={handleInputChange}
              name="collection_place"
            />
          </div> */}

          <button onClick={saveCompany} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCompany;
