import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import "./WelcomePageSignIn.css";

function WelcomePageSignIn(props) {
  const handleUserNameChange = (e) => {
    console.log("Nishant cmaer", e.target.value);
    props.setUsername(e.target.value);
  };
  const handleEmailChange=(e)=>{
    props.setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };
  return (
    <div className="Welcome-page-sign-in-component">
      <Box>
        <Typography variant="h4" className="Welcome-page-message">
          Welcome to Community
        </Typography>
        <FormControl className="login-form-control-welcome">
          {props.currentPage === "JoinPage" && (
            <TextField
              variant="outlined"
              label="Email"
              className="Welcome-page-message"
              value={props.email}
              onChange={handleEmailChange}
            ></TextField>
          )}
          <TextField
            variant="outlined"
            label="Username"
            className="Welcome-page-message"
            value={props.username}
            onChange={handleUserNameChange}
          ></TextField>
          <TextField
            variant="outlined"
            label="Password"
            className="Welcome-page-message"
            value={props.password}
            onChange={handlePasswordChange}
          ></TextField>
          <Button
            variant="contained"
            className="Welcome-page-message"
            onClick={props.loginButtonHandler}
          >
            Login In
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default WelcomePageSignIn;
