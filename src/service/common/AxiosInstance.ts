import axios from "axios";

export const url = "https://www.test.com";

const client = axios.create({
  baseURL: url,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default client;
