let PLACES = [
  
]

const getAll = () => {
  return PLACES;
};

const getById = (name) => {
  if (name === "") return PLACES
  var filtrado = PLACES.filter((obj) => obj.name.includes(name) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return PLACES.push(data);
};

const update = (key, data) => {
  console.log(key)
  PLACES.forEach(function(item) {
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
  return PLACES.splice(PLACES.indexOf(key), 1);
};

const removeAll = () => {
  PLACES=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};


 