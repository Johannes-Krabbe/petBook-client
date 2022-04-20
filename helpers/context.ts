import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "http://localhost:3001" : "https://api.petbook.johanneskrabbe.com",
  timeout: 1000,
  withCredentials: true,
});
