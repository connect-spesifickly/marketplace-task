import axios from "axios";
export const api = axios.create({
  baseURL: "https://fake-blibli-server.vercel.app",
});
