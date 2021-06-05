let COMPANIES = [
  {name: "", cnpj:"", address: "", responsible: "", phone: "", collection_place: false},
]

const getAll = () => {
  return COMPANIES;
};

export const getById = (name) => {
  if (name === "") return COMPANIES;

  let filtrado = COMPANIES.filter(obj => obj.title.includes(name) ); // retorna os objs que contém 
  return filtrado
};

export const create = (data) => {
  return COMPANIES.push(data);
};

export const update = (name, data) => {
  COMPANIES.forEach(item =>  {
    if (item.title === name){
      item.title = data.title
      item.description = data.description
      item.published = data.published
    }
  });
  return 
};

export const remove = (key) => {
  return COMPANIES.splice(COMPANIES.indexOf(key), 1);
};

export const removeAll = () => {
  COMPANIES=[]
};

// export default {
//   getAll,
//   create,
//   update,
//   remove,
//   removeAll,
//   getById
// };