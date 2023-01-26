import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import './WelcomePageSignIn.css'

function WelcomePageSignIn() {
  return (
    <div className="Welcome-page-sign-in-component">
      <Box>
        <Typography variant="h4" className="Welcome-page-message">Welcome to Community</Typography>
        <FormControl className="login-form-control-welcome">
          <TextField variant="outlined" label="Username" className="Welcome-page-message"></TextField>
          <TextField variant="outlined" label="Password" className="Welcome-page-message"></TextField>
          <Button variant="contained" className="Welcome-page-message">Login In</Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default WelcomePageSignIn;
