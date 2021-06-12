import axios from 'axios';

const api = axios.create({
  baseURL: "https://60c4053f2df2cb00178ac126.mockapi.io/api/v1",
});

export const getAll = () => {
  return api.get('/companies');
}

export const getOne = (id) => {
 return api.get(`/companies/${id}`);
}

export const create = (data) => {
  return api.post("/companies", {
    name: data.name,
    cnpj: data.cnpj,
    address: data.address,
    responsible: data.responsible,
    phone: data.phone,
    collectionPlace: data.collection_place,
  });
}

export const update = (id, data) => {
  return api.put(`/companies/${id}`, {
    name: data.name,
    cnpj: data.cnpj,
    address: data.address,
    responsible: data.responsible,
    phone: data.phone,
    collectionPlace: data.collection_place,
  });
}

export const remove = (id) => {
  return api.delete(`/companies/${id}`);
}

export const removeAll = async () => {
  await getAll().then(response => {
    response.data.map(item => remove(item.id));
  });
}

export const findCompaniesByName = (name) => {
  return api.get(`/companies?name=${name}`);
} 