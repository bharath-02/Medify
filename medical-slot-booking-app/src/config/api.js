import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response, // Return successful responses as is
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to home...");

      // Clear local storage and redirect to home
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Since this is outside a React component, we can't use `useNavigate`
      window.location.href = "/"; // Redirect to homepage
    }
    return Promise.reject(error); // Reject other errors
  }
);

export default API;
