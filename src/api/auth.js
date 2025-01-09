import axios from "axios";

const axiosInstance = axios.create({
  /*"http://localhost:3000",*/
  baseURL: "https://digitalskillsbackend-production.up.railway.app",

  withCredentials: true,
});

export const registerRequest = async (user) => {
  return await axiosInstance.post("/register", user);
};
/*
export const registerRequest = async (user) => {
  try {
    const response = await axiosInstance.post("/register", user);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de registro:", error);
    throw error;
  }
};
*/
export const signinRequest = (user) => {
  return axiosInstance.post("/signin", user);
};

export const verifyToken = () => {
  return axiosInstance.get("/verifyToken");
};

export const updateLevel = (level) => {
  console.log(level);
  return axiosInstance.put(`/level/${level._id}`, level);
};

export const logOut = () => {
  return axiosInstance.post("/logOut");
};
