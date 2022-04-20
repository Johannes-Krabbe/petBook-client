import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.petbook.johanneskrabbe.com",
  timeout: 1000,
  withCredentials: true,
});
