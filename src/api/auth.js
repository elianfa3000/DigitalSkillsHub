import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const registerRequest = async (user) => {
  return axiosInstance.post("/register", user);
};

export const signinRequest = (user) => {
  return axiosInstance.post("/signin", user);
};

export const verifyToken = () => {
  return axiosInstance.get("/verifyToken");
};
