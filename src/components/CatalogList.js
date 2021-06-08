import React, { useState } from "react";
import { Link } from "react-router-dom";
import TutorialDataService from "../services/CatalogDataService";
import AddTutorial from "./AddCatalog";


const TutorialsList = () => {
  
  const [searchTitle, setSearchTitle] = useState("");
  const [tutorials, setTutorials] = useState(TutorialDataService.getAll());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };



  const deleteTutorial = (id) => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.remove(id);
    }
  }

  const removeAllTutorials = () => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.removeAll();
      setTutorials(TutorialDataService.getAll())
    }
  };


  const findByTitle = () => {
    setTutorials(TutorialDataService.getById(searchTitle))
  };

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
            tutorials &&
            tutorials.map((tutorial, index) => (
              <tr>
                <th scope="row">{tutorial.key}</th>
                <td>{tutorial.title}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.type}</td>
                <td>{tutorial.state ? " Good" : " Damaged"}</td>
                <td> <Link to={"/catalog/" + tutorial.title}
                  className="btn btn-warning">Edit</Link>
                </td>
                <td> <Link onClick={() => deleteTutorial(tutorial.title)}
                  className="btn btn-danger">Remove</Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTutorials}>
          Remove All
        </button>
      </div>
     
    </div>
    
  );
};

export default TutorialsList;

/*<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body><AddTutorial/></Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>*/