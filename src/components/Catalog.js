import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/CatalogDataService";
import { Link } from "react-router-dom";


const Tutorial = props => {
  const initialTutorialState = {
    key: null,
    title: "",
    type: "",
    description: "",
    state: "damaged",
  };
  const [message, setMessage] = useState("");
  
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = TutorialDataService.getById(key)
    setCurrentTutorial(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };
  
  
  const updateState = status => {
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,
      type: currentTutorial.type,
      state : status
    };
    TutorialDataService.update(key, data);  
    setCurrentTutorial(data)
  };

  const updateTutorial = () => {
    
    const data = {
      title: currentTutorial.title,
      type: currentTutorial.type,
      description: currentTutorial.description,
      state: currentTutorial.state

    };  
    TutorialDataService.update(key, data);
    setCurrentTutorial(data)
  };

  const deleteTutorial = () => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.remove(currentTutorial.key);  
    }
  };

  return (
    <div>
      {currentTutorial ? (
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
                  value={currentTutorial.title}
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
                  value={currentTutorial.type}
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
                  value={currentTutorial.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.state ? " Good" : " Damaged"}
              </div>
            </form>
            
              
          {currentTutorial.state ? (
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
          
          <button className="btn btn-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          
          <Link to="/catalog">
            <button
              type="submit"
              className="btn btn-success"
              onClick={updateTutorial}
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

export default Tutorial;
