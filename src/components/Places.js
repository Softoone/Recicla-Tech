import React, { useState, useEffect } from "react";
import PlacesDataService from "../services/PlacesDataService";
import { Link } from "react-router-dom";

const Places = props => {
  const initialPlaceState = {
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
  const [currentPlace, setCurrentPlace] = useState(initialPlaceState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = PlacesDataService.getById(key)
    console.log(key)
    setCurrentPlace(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPlace({ ...currentPlace, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      name: currentPlace.name,
      address: currentPlace.address,
      contact:currentPlace.contact,
      materialType:currentPlace.materialType,
      latLong:currentPlace.latLong,
      capacity:currentPlace.capacity,
      published: status
    };
    PlacesDataService.update(key, data);  
    setCurrentPlace(data)
  };

  const updatePlace = () => {
    //console.log(currentPlace)
    const data = {
      name: currentPlace.name,
      address: currentPlace.address,
      contact:currentPlace.contact,
      materialType:currentPlace.materialType,
      latLong:currentPlace.latLong,
      capacity:currentPlace.capacity,
      published: currentPlace.published
    };  
    PlacesDataService.update(key, data);
    setCurrentPlace(data)
  };

  const deletePlace = () => {
    console.log(currentPlace)
    if (window.confirm('Deseja excluir?')){
      PlacesDataService.remove(currentPlace.key);  
    }
  };

  return (
    <div>
      {currentPlace ? (
        <div className="edit-form">
          <h4>Place</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={currentPlace.name}
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
                  value={currentPlace.address}
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
                  value={currentPlace.contact}
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
                  value={currentPlace.materialType}
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
                  value={currentPlace.latLong}
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
                  value={currentPlace.capacity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentPlace.published ? "Published" : "Pending"}
              </div>
            </form>
          {currentPlace.published ? (
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
          <button className="badge badge-danger mr-2" onClick={deletePlace}>
            Delete
          </button>
          <Link to="/">
            <button
              type="submit"
              className="badge badge-success"
              onClick={updatePlace}
            >
              Update
            </button>
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Place...</p>
        </div>
      )}
    </div>
  );
};

export default Places;


