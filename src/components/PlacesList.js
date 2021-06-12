
import React,{useState} from "react";
import { Link } from "react-router-dom";
import PlacesDataService from "../services/PlacesDataService";

const PlacesList = () => {
  
  const[searchTitle, setSearchTitle]= useState("")
  const[places, setPlaces] = useState(PlacesDataService.getAll())

  const onChangeSearchTitle = e =>{
    setSearchTitle(e.target.value)
    
  }

  const findByTitle = () =>{
    setPlaces(PlacesDataService.getById(searchTitle))
  }

  const deletePlace=(id)=>{
    if (window.confirm('Deseja excluir?')){
      PlacesDataService.remove(id);
    }
  }

  const removeAllPlaces = () =>{
    if (window.confirm('Deseja excluir TODOS os itens?')){
      PlacesDataService.removeAll();
      setPlaces(PlacesDataService.getAll())
    }
  }
  
  return (
    <div className="list row">
      <div className="col-md-10">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Collection Places"
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
          <h4>Collection Places List</h4>
          <table className="table">
            <thead clasName="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th scope="col">Material</th>
                <th scope="col">Lat/Long</th>
                <th scope="col">Capacity</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>   
            </thead>
            <tbody>
              {
                places &&
                places.map((place,index) =>(
                  <tr>
                    <th scope="row">{place.key}</th>
                    <td>{place.name}</td>
                    <td>{place.address}</td>
                    <td>{place.contact}</td>
                    <td>{place.materialType}</td>
                    <td>{place.latLong}</td>
                    <td>{place.capacity}</td>
                    <td><Link to={"/Places/"+place.name} className="btn btn-warning btn-sm">Edit</Link></td>
                    <td><Link onClick={()=>deletePlace(place.name)} className="btn btn-danger btn-sm">Remove</Link></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button 
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllPlaces}
          >Remove ALL Places</button>
        </div>
    </div>
  );
};

export default PlacesList;
