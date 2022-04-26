import axios from "axios";

export const request = axios.create({
  // baseURL: "https://petbook-api.johanneskrabbe.com",
  baseURL: "http://localhost:3001",
  timeout: 1000,
  withCredentials: true,
});
