import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import * as api from '../services/CatalogMockApi';


const CatalogsList = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [catalog, setCatalog] = useState([]);

  const onChangeSearchTitle = event => {
    const TargetTitle = event.target.value;
    setSearchTitle(TargetTitle);
  };

  const deleteCatalog = (id) => {
    if (window.confirm('Deseja excluir?')){
      api.remove(id); 
    }
  }

  const removeAllCatalog = () => {
    if (window.confirm('Deseja excluir?')){
      api.removeAll();
      api.getAll(response => {
        setCatalog(response.data)
      })
    }
  };

  const findByTitle = () => {
    api.findCatalogByTitle((searchTitle)).then(response => {
      setCatalog(response.data)
    })
  };

  useEffect(()=>{
    api.getAll().then(response => {
      setCatalog(response.data)
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
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <h4>Parts Catalog</h4>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">State</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          { 
            catalog &&
            catalog.map((catalog, index) => (
              <tr>
                <th scope="row">{catalog.id}</th>
                <td>{catalog.title}</td>
                <td>{catalog.description}</td>
                <td>{catalog.type}</td>
                <td>{catalog.state ? " Good" : " Damaged"}</td>
                <td> <Link to={"/catalog/" + catalog.id}
                  className="btn btn-warning">Edit</Link>
                </td>
                <td> <Link onClick={() => deleteCatalog(catalog.id)}
                  className="btn btn-danger">Remove</Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllCatalog}>
          Remove All
        </button>
      </div>
     
    </div>
    
  );
};

export default CatalogsList;

