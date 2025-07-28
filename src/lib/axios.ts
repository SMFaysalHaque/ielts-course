import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.10minuteschool.com/discovery-service/api/v1",
  headers: {
    "X-TENMS-SOURCE-PLATFORM": "web",
    accept: "application/json",
  },
});
