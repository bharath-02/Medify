import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import NavBar from "../components/NavBar/NavBar";
import AuthContext from "../context/AuthContext";
import API from "../config/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await API.post("/auth/login", { email, password });

      login(response.data.user, response.data.token);
      navigate("/search");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          height: "75vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              background: "#fff",
              p: 4,
              borderRadius: 2,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h2" textAlign="center" mb={2}>
              Login
            </Typography>

            {error && <Typography color="error" mb={2}>{error}</Typography>}

            <form onSubmit={handleLogin}>
              <Stack spacing={3}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign="center">
                  Don't have an account? <Link to="/register">Register</Link>
                </Typography>
              </Stack>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}
