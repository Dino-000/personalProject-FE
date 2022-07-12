import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/skillsets");
};

const create = (data) => {
  return httpClient.post("/skillsets", data);
};

const get = (id) => {
  return httpClient.get(`/skillsets/${id}`);
};

const update = (id, data) => {
  return httpClient.put(`/skillsets/${id}`, data);
};

const remove = (id) => {
  return httpClient.delete(`/skillsets/${id}`);
};

const SkillSetService = { getAll, create, get, update, remove };
export default SkillSetService;
