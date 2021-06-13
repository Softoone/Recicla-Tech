import React, { useState } from "react";
import PlacesDataService from "../services/PlacesDataServiceRest";

const AddPlaces = () => {
  const initialPlaceState = {
    id: null,
    name: "",
    description: "",
    contact:"",
    materialType:"",
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
    
    PlacesDataService.create(place).then(
      response =>{
        setPlace({
          name: response.data.name,
          address: response.data.address,
          contact: response.data.contact,
          materialType:response.data.materialType,
          capacity:response.data.capacity,
          published: response.data.published,
          id: response.data.id
        })
         setSubmitted(true);
      }
    ).catch(e=> {
      console.log(e)
    })
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



