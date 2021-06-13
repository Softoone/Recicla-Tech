import axios from 'axios';

const api = axios.create({
  baseURL: "https://60c6511619aa1e001769f206.mockapi.io/api/v1/",
});

export const getAll = () => {
  return api.get('/catalog');
}

export const getOne = (id) => {
 return api.get(`/catalog/${id}`);
}

export const create = (data) => {
  return api.post("/catalog", {
    title: data.title,
    type: data.type,
    description: data.description,
    status: data.status,
  });
}

export const update = (id, data) => {
  return api.put(`/catalog/${id}`, {
    title: data.title,
    type: data.type,
    description: data.description,
    state: data.state,
  });
}

export const remove = (id) => {
  return api.delete(`/catalog/${id}`);
}

export const removeAll = async () => {
  await getAll().then(response => {
    response.data.map(item => remove(item.id));
  });
}

export const findCatalogByTitle = (title) => {
  return api.get(`/catalog?name=${title}`);
} 