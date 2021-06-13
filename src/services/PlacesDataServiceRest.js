import http from "../http-common";

const getAll = () => {
  return http.get("/Places");
};
const getById = (id) => {
  return http.get(`/Places/${id}`);
};
const create = data => {
  return http.post("/Places", data);
};
const update = (id, data) => {
  return http.put(`/Places/${id}`, data);
};
const remove = id => {
  return http.delete(`/Places/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Places`);
};
const findByTitle = title => {
  return http.get(`/Places?title=${title}`);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};


