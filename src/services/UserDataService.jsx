let Users = [
  {name: "Everton", phone: "988331651", email: "testedoemail@email.com", password: "********"},
  {name: "Everton", phone: "988331651", email: "testedoemail@email.com", password: "********"},
  {name: "Everton", phone: "988331651", email: "testedoemail@email.com", password: "********"}
]

const getAll = () => {
  return Users;
};

const getById = (name) => {
  if (name === "") return Users
  var filtrado = Users.filter((obj) => obj.name.includes(name) );
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
