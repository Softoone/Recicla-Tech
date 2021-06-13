import { useState, useEffect } from "react";
import  * as api from '../services/CatalogMockApi';
import { Link } from "react-router-dom";


const Catalog = ({ match }) => {
  const initialCatalogState = {
    //key: null,
    title: "",
    type: "",
    description: "",
    state: "damaged",
  };

  const [message, setMessage] = useState("");
  const [currentCatalog  , setCurrentCatalog] = useState(initialCatalogState);
  const [key, setKey] = useState()

  useEffect(()=>{
    api.getOne(match.params.id).then(response => {
      setCurrentCatalog(response.data);
    })
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCatalog({ ...currentCatalog, [name]: value });
  };
  
  
  const updateState = status => {
    const data = {
      title: currentCatalog.title,
      description: currentCatalog.description,
      type: currentCatalog.type,
      state : status
    }
    setCurrentCatalog(data)
    api.update(currentCatalog.id, data)
  };

  const updateCatalog = () => {
    const data = { 
      title: currentCatalog.title,
      type: currentCatalog.type,
      description: currentCatalog.description,
      state: currentCatalog.state
    }
    setCurrentCatalog(data)
    api.update(currentCatalog.id, data);;
  };

  const deleteCatalog = () => {
    if (window.confirm('Deseja excluir?')){
      api.remove(currentCatalog.id);  
    }
  };

  return (
    <div>
      {currentCatalog ? (
        <div className="edit-form">
          <h4>Catálogo</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentCatalog.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  value={currentCatalog.type}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentCatalog.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentCatalog.state ? " Good" : " Damaged"}
              </div>
            </form>
            
              
          {currentCatalog.state ? (
            <button
              className="btn btn-primary mr-2"
              onClick={() => updateState(false)}
            >
              Damaged
            </button>
          ) : (
            <button
              className="btn btn-primary mr-2"
              onClick={() => updateState(true)}
            >
              Good
            </button>
          )}
          
          <button className="btn btn-danger mr-2" onClick={deleteCatalog}>
            Delete
          </button>
          
          <Link to="/catalog">
            <button
              type="submit"
              className="btn btn-success"
              onClick={updateCatalog}
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

export default Catalog;
