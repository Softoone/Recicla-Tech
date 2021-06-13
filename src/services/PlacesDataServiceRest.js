import http from "../http-common";

const getAll = () => {
  return http.get("/Places");
};
const get = (id) => {
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

const removeAll = async () => {
  const result = await getAll()
  const data = await result.data.map(item => {
  remove(item.id)
  })
  if (data){
    window.alert("Todos os itens foram deletados!")
    window.location.reload()
  }
}

const findByTitle = name => {
  return http.get(`/Places?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};


