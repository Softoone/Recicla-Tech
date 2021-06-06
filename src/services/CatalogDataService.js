let PRODUCTS = []

const getAll = () => {
  return PRODUCTS;
};

const getById = (title) => {
  if (title === "") return PRODUCTS
  var filtrado = PRODUCTS.filter((obj) => obj.title.includes(title) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return PRODUCTS.push(data);
};

const update = (key, data) => {
  console.log(key)
  PRODUCTS.forEach(function(item) {
    if (item.title === key){
      item.title = data.title
      item.type = data.type
      item.description = data.description
      item.state = data.state
    }
  });
  return 
};

const remove = (key) => {
  return PRODUCTS.splice(PRODUCTS.indexOf(key), 1);
};

const removeAll = () => {
  PRODUCTS=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};
