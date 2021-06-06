import React, { useState, useEffect } from "react";
import Shipping_CompanyDataService from "./services/Shipping_CompanyDataService";
import { Link } from "react-router-dom";

const Shipping_Company = props => {
  const initialShippingCompanyState = {
        name: "",
        contacts: "",
        type_car: "",
        restrict: ""
  };
  const [message, setMessage] = useState("");
  const [currentShippingCompany, setCurrentShippingCompany] = useState(initialShippingCompanyState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = Shipping_CompanyDataService.getById(key)
    console.log(key)
    setCurrentShippingCompany(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentShippingCompany({ ...currentShippingCompany, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      name: currentShippingCompany.name,
      contacts: currentShippingCompany.contacts,
      type_car: currentShippingCompany.type_car,
      restrict: currentShippingCompany.restrict,
      published: status
    };

    Shipping_CompanyDataService.update(key, data);  
    setCurrentShippingCompany(data)
  };

  const updateShippingCompany = () => {
    //console.log(currentTutorial)
    const data = {
      name: currentShippingCompany.name,
      contacts: currentShippingCompany.contacts,
      type_car: currentShippingCompany.type_car,
      restrict: currentShippingCompany.restrict,
      published: currentShippingCompany.published
    };  
    
    Shipping_CompanyDataService.update(key, data);
    setCurrentShippingCompany(data)
  };

  const deleteTutorial = () => {
    
  };

  return (
    <div>
      {currentShippingCompany ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={currentShippingCompany.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contacts">Contato</label>
                <input
                  type="text"
                  className="form-control"
                  id="contacts"
                  name="contacts"
                  value={currentShippingCompany.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type_car">Tipo de Veiculo</label>
                <input
                  type="text"
                  className="form-control"
                  id="type_car"
                  name="type_car"
                  value={currentShippingCompany.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="restrict">Restricões</label>
                <input
                  type="text"
                  className="form-control"
                  id="restrict"
                  name=""
                  value={currentShippingCompany.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentShippingCompany.published ? "Published" : "Pending"}
              </div>
            </form>
          {currentShippingCompany.published ? (
            <button
              className="btn btn-primary"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <button className="btn btn-danger" onClick={deleteTutorial}>
            Delete
          </button>
          <Link to="/">
            <button
              type="submit"
              className="btn btn-success"
              onClick={updateShippingCompany}
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

export default Shipping_Company;