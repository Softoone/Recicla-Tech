import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/UserDataServiceRest";

const User = (props) => {
    const defaultUser = {
        name: '',
        phone: '',
        email: '',
        password: ''
    }

  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(defaultUser);

  
  const getUser = id => {
    console.log(id)
    UserDataService.getId(id)
    .then(response => {
      setCurrentUser(response.data)
    })
  }

  useEffect(() => {
    getUser(props.match.params.id)
  },[props.match.params.id])



  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updateUser = () => {
    const data = { 
      name : currentUser.name,
      phone : currentUser.phone,
      email : currentUser.email,
      password : currentUser.password
    }

    UserDataService.update(currentUser.id, data)
  }

  const deleteUser = () => {
    // console.log(currentTutorial)
    if (window.confirm('Deseja excluir?')){
        UserDataService.remove(currentUser.id)
        .then(response => {
          props.history.push("/user")
        })
    }
  };

  return (
    <div>
      {currentUser ? (
        <div className="edit-form">
          <h4>Usuário</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={currentUser.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefone:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={currentUser.phone}
                  onChange={handleInputChange}
                  name="phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={currentUser.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  value={currentUser.password}
                  onChange={handleInputChange}
                  name="password"
                />
              </div>

            </form>

          <button className="btn btn-danger mr-2" onClick={deleteUser}>
            Delete
          </button>
          
          <Link to="/user">
            <button
              type="submit"
              className="btn btn-success"
              onClick={updateUser}
            >
              Update
            </button>
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a User...</p>
        </div>
      )}
    </div>
  );
};

export default User;