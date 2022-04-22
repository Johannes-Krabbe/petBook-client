import axios from "axios";

export const request = axios.create({
  baseURL: "https://petbook-api.johanneskrabbe.com",
  timeout: 1000,
  withCredentials: true,
});
