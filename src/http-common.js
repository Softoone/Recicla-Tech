import axios from "axios";
export default axios.create({
  baseURL: "https://60c53ecbec8ef800175e0ffd.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});
