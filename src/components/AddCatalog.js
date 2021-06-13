import React, { useState } from "react";
//import TutorialDataService from "../services/CatalogDataService";
import * as api from "../services/CatalogMockApi";

const AddCatalog = () => {
  const initialCatalogState = {
    //id: Math.random().toFixed(3),
    type: "",
    title: "",
    description: "",
    state: false
  };
  const [catalog, setCatalog] = useState(initialCatalogState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCatalog({ ...catalog, [name]: value });
  };

    const saveCatalog = () => {
      const data = { 
        title: catalog.title,
      description: catalog.description,
      type: catalog.type,
      state: false,
      }
  
      api.create(data);
      setSubmitted(true);
    };

  const newCatalog = () => {
    setCatalog(initialCatalogState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCatalog}>
            click here to add more
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={catalog.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Type</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={catalog.type}
              onChange={handleInputChange}
              name="type"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={catalog.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

         <div>
            <label for="exampleFormControlFile1">Imagem</label>
            <input 
            type="file" 
            class="form-control-file" 
            id="exampleFormControlFile1"
            />
         </div>

          <br/>
          <button onClick={saveCatalog} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
      };

export default AddCatalog;
