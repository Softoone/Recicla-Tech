import http from '../http-common'
  
  const getAll = () => {http.get("/users")};
  
  const getId = id => {http.get("/users"+id)}
  
  const create = data => {http.post("/users",data)};
  
  const update = (id,data) => {http.put("/users"+id,data)}
  
  const remove = id => {http.delete("/users"+id)};

  const findByUser = username => {return http.get("/tutorials/?name="+username)}

/*   const filter = id => {
    if (name === "") return Users
    var filtrado = Users.filter((obj) => obj.name.includes(name) );
    return filtrado
  
  }; */

 /*  const updateComponent= (key, data) => {
    console.log(key)
    Users.forEach(function(item) {
      if (item.name === key){
        item.name = data.name
        item.phone = data.phone
        item.email = data.email
        item.password = data.password
      }
    }
    );
    return 
  }; */
  
  export default {
    getAll,
    getId,
    create,
    update,
    remove,
    findByUser
  };
  