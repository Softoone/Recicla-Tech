import React, { useState } from "react";
import PlacesDataService from "../services/PlacesDataService";

const AddPlaces = () => {
  const initialPlaceState = {
    id: null,
    title: "",
    description: "",
    contact:"",
    materialType:"",
    latLong:"",
    capacity:"",
    published: false
  };
  const [place, setPlace] = useState(initialPlaceState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPlace({ ...place, [name]: value });
  };

  const savePlace = () => {
    var data = {
      name: place.name,
      address: place.address,
      contact: place.contact,
      materialType:place.materialType,
      latLong:place.latLong,
      capacity:place.capacity,
      published: false
    };

    PlacesDataService.create(data);
    setSubmitted(true);
  };

  const newPlace = () => {
    setPlace(initialPlaceState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form"> {/*Aqui serão feitas as alterações*/}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPlace}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={savePlace}> 
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={place.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder = "exemplo@gmail.com"
              value={place.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Contact</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              required
              placeholder = "(xx) 9xxxx-xxxx"
              value={place.contact}
              onChange={handleInputChange}
              name="contact"
            />
          </div>
          <div className="form-group">
            <label htmlFor="materialType">Material type</label>
            <input
              type="text"
              className="form-control"
              id="materialType"
              required
              placeholder="Bateria"
              value={place.materialType}
              onChange={handleInputChange}
              name="materialType"
            />
          </div>
          <div className="form-group">
            <label htmlFor="latLong">Lat/Long</label>
            <input
              type="text"
              className="form-control"
              id="latLong"
              placeholder="-12.969522241359458, -38.512655070565565"
              value={place.latLong}
              onChange={handleInputChange}
              name="latLong"
            />
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Capacity</label>
            <input
              type="text"
              className="form-control"
              id="capacity"
              required
              placeholder = "In M³"
              value={place.capacity}
              onChange={handleInputChange}
              name="capacity"
            />
          </div>
        
         <button type="submit" 
                className="btn btn-success">Submit</button>  
          </form>
        </div>
      )}
    </div>
  );
};
export default AddPlaces;



