import React,{useState} from "react";
import { Link } from "react-router-dom";
import PlacesDataService from "../services/PlacesDataService";

const PlacesList = () => {
  
  const[searchTitle, setSearchTitle]= useState("")
  const[tutorials, setTutorials] = useState(PlacesDataService.getAll())

  const onChangeSearchTitle = e =>{
    setSearchTitle(e.target.value)
    
  }

  const findByTitle = () =>{
    setTutorials(PlacesDataService.getById(searchTitle))
  }

  const deleteTutorial=(id)=>{
    if (window.confirm('Deseja excluir?')){
      PlacesDataService.remove(id);
    }
  }

  const removeAllTutorials = () =>{
    if (window.confirm('Deseja excluir TODOS os itens?')){
      PlacesDataService.removeAll();
      setTutorials(PlacesDataService.getAll())
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
                tutorials &&
                tutorials.map((tutorial,index) =>(
                  <tr>
                    <th scope="row">{tutorial.key}</th>
                    <td>{tutorial.name}</td>
                    <td>{tutorial.address}</td>
                    <td>{tutorial.contact}</td>
                    <td>{tutorial.materialType}</td>
                    <td>{tutorial.latLong}</td>
                    <td>{tutorial.capacity}</td>
                    <td><Link to={"/Places/"+tutorial.name} className="badge badge-warning">Edit</Link></td>
                    <td><Link onClick={()=>deleteTutorial(tutorial.name)} className="badge badge-danger">Remove</Link></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button 
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTutorials}
          >Remove ALL Places</button>
        </div>
    </div>
  );
};

export default PlacesList;
