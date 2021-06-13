import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/UserDataServiceRest";


const UserList = () => {
  
  const [searchUsername, setSearchUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    retrieveUsers()
  }, [])

  const retrieveUsers = () => {
    UserDataService.getAll()
    .then(response => {
      console.log(response)
      setUsers(response.data)
    })
  } 

  const onChangeSearchUsername = e => {
    const searchUsername = e.target.value;
    setSearchUsername(searchUsername);
  };

  const deleteUser = (id) => {
    if (window.confirm('Deseja excluir?')){
        UserDataService.remove(id);
    }
  }

  const removeAll = () => {
    if (window.confirm('Deseja excluir?')){
       const UserData = UserDataService.removeAll()
       console.log(UserData)
        if (UserData.flag === -1){
          UserDataService.getAll()
          .then(
            response => {
              setUsers(response.data)
              window.alert(UserData.Mensagem)
              window.location.reload()
            })
        }
    }
  };

  const findByUsername = () => {
    UserDataService.findByUser(searchUsername)
    .then(
      response => {
        setUsers(response.data)
      }
    )
  };

  return (
    <div className="list row">
      <div className="col-md-10">
        
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for User"
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
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">Email</th>
              <th scope="col">Senha</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          { 
            users &&
            users.map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td> <Link to={"/user/" + user.id}
                  className="btn btn-sm btn-warning">Edit</Link>
                </td>
                <td scope="row"> 
                    <Link onClick={() => deleteUser(user.id)}
                        className="btn btn-sm btn-danger"
                        >Remove
                    </Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAll}>
          Remove All
        </button>
      </div>
     
    </div>
    
  );
};

export default UserList;