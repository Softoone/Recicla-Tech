let COMPANIES = [
  {name: "Diriri", cnpj:"14912275000106", address: "Rua dos bobos, n 0", responsible: "Verissimo", phone: "71999998888", collection_place: false},
  {name: "Jututu", cnpj:"14912275000106", address: "Rua dos bobos, n 1", responsible: "Verissimo", phone: "71999998888", collection_place: false},
  {name: "Nhanana", cnpj:"14912275000106", address: "Rua dos bobos, n 2", responsible: "Verissimo", phone: "71999998888", collection_place: false},
]

export const getAll = () => {
  return COMPANIES;
};

export const getByName = (name) => {
  if (name === "") return COMPANIES;

  let filtrado = COMPANIES.filter(obj => obj.name.includes(name) ); // retorna os objs que contém 
  return filtrado
};

export const create = (data) => {
  return COMPANIES.push(data);
};

export const update = (name, data) => {
  COMPANIES.forEach(item =>  {
    if (item.name === name){
      item.name = data.name;
      item.cnpj = data.cnpj;
      item.address = data.address;
      item.responsible = data.responsible;
      item.phone = data.phone;
      item.collection_place = data.collection_place;
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