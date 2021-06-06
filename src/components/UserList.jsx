import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/UserDataService";


const UserList = () => {
  
  const [searchUsername, setSearchUsername] = useState("");
  const [users, setUsers] = useState(UserDataService.getAll());

  const onChangeSearchUsername = e => {
    const searchUsername = e.target.value;
    setSearchUsername(searchUsername);
  };

  const deleteUser = (id) => {
    if (window.confirm('Deseja excluir?')){
        UserDataService.remove(id);
    }
  }

  const removeAllUsers = () => {
    if (window.confirm('Deseja excluir?')){
        UserDataService.removeAll();
      setUsers(UserDataService.getAll())
    }
  };


  const findByUsername = () => {
    setUsers(UserDataService.getById(searchUsername))
  };

  return (
    <div className="list row">
      <div className="col-md-10">
        
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Username"
            value={searchUsername}
            onChange={onChangeSearchUsername}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByUsername}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <h4>Users List</h4>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">Email</th>
              <th scope="col">Senha</th>
            </tr>
          </thead>
          <tbody>
          { 
            users &&
            users.map((user, index) => (
              <tr>
                <th scope="row">{user.name}</th>
                <td scope="row">{user.phone}</td>
                <td scope="row">{user.email}</td>
                <td scope="row">{user.password}</td>
                <td scope="row"> <Link to={"/user/" + user.name}
                  className="badge badge-warning">Edit</Link>
                </td>
                <td scope="row"> 
                    <Link onClick={() => deleteUser(user.title)}
                        className="badge badge-danger"
                        >Remove
                    </Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllUsers}>
          Remove All
        </button>
      </div>
     
    </div>
    
  );
};

export default UserList;