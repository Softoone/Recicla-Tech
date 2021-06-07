import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserDataService from "../services/UserDataService";

const User = (props) => {
    const defaultUser = {
        name: '',
        phone: '',
        email: '',
        password: ''
    }

  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [key, setKey] = useState(props.match.params.id);
  

  useEffect(()=>{
    const data = UserDataService.getByName(key)
    console.log(key);
    setCurrentUser(data[0]); 
  }, []);

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

    UserDataService.update(key, data);
    setCurrentUser(data);
  };

  const deleteUser = () => {
    // console.log(currentTutorial)
    if (window.confirm('Deseja excluir?')){
        UserDataService.remove(currentUser.name);  
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

          <button className="badge badge-danger mr-2" onClick={deleteUser}>
            Delete
          </button>
          
          <Link to="/users">
            <button
              type="submit"
              className="badge badge-success"
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
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default User;