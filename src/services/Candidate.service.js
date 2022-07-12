import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/candidates");
};

const create = (data) => {
  return httpClient.post("/candidates", data);
};

const get = (id) => {
  return httpClient.get(`/candidates/${id}`);
};

const update = (id, data) => {
  return httpClient.put(`/candidates/${id}`, data);
};

const remove = (id) => {
  return httpClient.delete(`/candidates/${id}`);
};

const CandidateService = { getAll, create, get, update, remove };
export default CandidateService;
