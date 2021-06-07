let Users = [
  
]

const getAll = () => {
  return Users;
};

const getById = (name) => {
  if (name === "") return Users
  //var filtrado = PRODUCTS.filter((obj) => { return obj.name == name; });  // retorna os objs que são iguais
  //var filtrado = PRODUCTS.filter((obj) => obj.name == name ); // retorna os objs que são iguais
  var filtrado = Users.filter((obj) => obj.name.includes(name) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return Users.push(data);
};

const update = (key, data) => {
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
};

const remove = (key) => {
  return Users.splice(Users.indexOf(key), 1);
};

const removeAll = () => {
    Users=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};