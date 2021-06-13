
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PlacesDataService from "../services/PlacesDataServiceRest";

const PlacesList = () => {
  
  const[searchTitle, setSearchTitle]= useState("")
  const[places, setPlaces] = useState()

  useEffect(() => {
    retrievePlaces();
  }, []);

  const retrievePlaces = () => {
    PlacesDataService.getAll().then(
        response => {
          setPlaces(response.data);
          console.log(response.data);
        })
      .catch(e => {
        console.log(e);
      });
  };


  const onChangeSearchTitle = e =>{
    setSearchTitle(e.target.value) 
  }

  const deletePlace = (id) => {
    if (window.confirm('Deseja excluir?')){
      PlacesDataService.remove(id)
      .then(response => {
        console.log(response.data);
        retrievePlaces();
      })
      .catch(e => {
        console.log(e);
      });
    }
  }

  const removeAllPlaces = () => {
    if (window.confirm('Deseja excluir?')){
    PlacesDataService.removeAll()
      .then(response => {
        console.log(response.data);
        retrievePlaces();
      })
      .catch(e => {
        console.log(e);
      });
    }
  };

  const findByTitle = () => {
    places(PlacesDataService.findByTitle(searchTitle))
    .then(response => {
      setPlaces(response.data)
    })
    .catch(e => {
        console.log(e);
      });
  };

  
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
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Material</th>
                <th scope="col">Capacity</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>   
            </thead>
            <tbody>
              {
                places &&
                places.map((Places,index) =>(
                  <tr>
                    <th scope="row">{Places.id}</th>
                    <td>{Places.name}</td>
                    <td>{Places.address}</td>
                    <td>{Places.contact}</td>
                    <td>{Places.materialType}</td>
                    <td>{Places.capacity}</td>
                    <td><Link to={"/Places/"+Places.id} className="btn btn-warning btn-sm">Edit</Link></td>
                    <td><Link onClick={()=>deletePlace(Places.id)} className="btn btn-danger btn-sm">Remove</Link></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        
        </div>
    </div>
  );
};

export default PlacesList;
