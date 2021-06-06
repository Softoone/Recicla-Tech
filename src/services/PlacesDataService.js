let PRODUCTS = [
  
]

const getAll = () => {
  return PRODUCTS;
};

const getById = (name) => {
  if (name === "") return PRODUCTS
  //var filtrado = PRODUCTS.filter((obj) => { return obj.name == name; });  // retorna os objs que são iguais
  //var filtrado = PRODUCTS.filter((obj) => obj.name == name ); // retorna os objs que são iguais
  var filtrado = PRODUCTS.filter((obj) => obj.name.includes(name) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return PRODUCTS.push(data);
};

const update = (key, data) => {
  console.log(key)
  PRODUCTS.forEach(function(item) {
    if (item.name === key){
      item.name = data.name
      item.address = data.address
      item.contact = data.contact
      item.materialType = data.materialType
      item.latLong = data.latLong
      item.capacity = data.capacity
      item.published = data.published
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


 