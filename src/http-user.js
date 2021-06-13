import axios from "axios";

export default axios.create({
  baseURL: "https://60bf811297295a0017c4307e.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});