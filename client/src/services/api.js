import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090/api/notes",
});

export const getNotes = () => {
  return api.get("/").then((res) => {
    return res.data;
  });
};
