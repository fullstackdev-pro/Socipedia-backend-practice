import React, { useState } from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import Input from "./input";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {signUp, signIn } from '../../actions/auth'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // dispatch(signUp(formData, navigate));
    } else {
      // dispatch(signIn(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prew) => (prew = !prew));
  };
  const switchMode = () => {
    setIsSignUp((prew) => (prew = !prew));
  };

  return (
    <Box component="main" m={4}>
      <Box className="text-center">
        <Typography variant="h5" style={{ marginBottom: "0.5rem" }}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form className="text-center" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  xs={6}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  xs={6}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item className="my-4">
              <Button onClick={switchMode} style={{ marginTop: "0.5rem" }}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Auth;
