import React, { useState, useEffect } from "react";
import PlacesDataService from "../services/PlacesDataService";
import { Link } from "react-router-dom";

const Places = props => {
  const initialTutorialState = {
    key: null,
    name: "",
    address: "",
    contact:"",
    materialType:"",
    latLong:"",
    capacity:"",
    published: "Unpublished"
  };
  const [message, setMessage] = useState("");
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = PlacesDataService.getById(key)
    console.log(key)
    setCurrentTutorial(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      name: currentTutorial.name,
      address: currentTutorial.address,
      contact:currentTutorial.contact,
      materialType:currentTutorial.materialType,
      latLong:currentTutorial.latLong,
      capacity:currentTutorial.capacity,
      published: status
    };
    PlacesDataService.update(key, data);  
    setCurrentTutorial(data)
  };

  const updateTutorial = () => {
    //console.log(currentTutorial)
    const data = {
      name: currentTutorial.name,
      address: currentTutorial.address,
      contact:currentTutorial.contact,
      materialType:currentTutorial.materialType,
      latLong:currentTutorial.latLong,
      capacity:currentTutorial.capacity,
      published: currentTutorial.published
    };  
    PlacesDataService.update(key, data);
    setCurrentTutorial(data)
  };

  const deleteTutorial = () => {
    console.log(currentTutorial)
    if (window.confirm('Deseja excluir?')){
      PlacesDataService.remove(currentTutorial.key);  
    }
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={currentTutorial.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={currentTutorial.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={currentTutorial.contact}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="materialType">Material Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="materialType"
                  name="materialType"
                  value={currentTutorial.materialType}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="latLong">Lat/Long</label>
                <input
                  type="text"
                  className="form-control"
                  id="latLong"
                  name="latLong"
                  value={currentTutorial.latLong}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="capacity">Capacity</label>
                <input
                  type="text"
                  className="form-control"
                  id="capacity"
                  name="capacity"
                  value={currentTutorial.capacity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>
          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          <Link to="/">
            <button
              type="submit"
              className="badge badge-success"
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

export default Places;


