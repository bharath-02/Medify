import { useState } from "react";
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
import API from "../config/api";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/signup", { name, email, password, location });
      navigate("/login");
    } catch (error) {
      setError(
        error.response?.data?.message || "Registration failed. Try again."
      );
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
              Register
            </Typography>

            {error && <Typography color="error" mb={2}>{error}</Typography>}

            <form onSubmit={handleRegister}>
              <Stack spacing={3}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Register
                </Button>
                <Typography textAlign="center">
                  Already have an account? <Link to="/login">Login</Link>
                </Typography>
              </Stack>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}
