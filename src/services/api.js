import axios from "axios";
//68600-000/json
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
export default api;
